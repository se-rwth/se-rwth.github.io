import bibtexparser
import re
from os import listdir
from os.path import isfile, join


def getmdkeys(path):
    with open(path) as file:
        file_data = file.read()

    file_keys = re.findall(r'keys: (\[[A-Za-z]+\+?[0-9]+[\,\n \w\+]*\])', file_data)

    res = []
    for string in file_keys:
        lists = string.strip('][').replace(' ', '').replace('\n', '').split(',')
        res.append(lists)
    flat_list = [x for xs in res for x in xs]
    return flat_list


def getbibkeys(path):
    with open(path, encoding='utf8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)

    bibtexlist = bib_database.entries
    keylist = []

    for entry in bibtexlist:
        keylist.append(entry.get('key'))

    return (keylist)


def checkkeys(mdkeys, bibkeys):
    missing_keys = []
    for key in mdkeys:
        if (not (key in bibkeys)):
            missing_keys.append(key)
    return missing_keys


def main(filepath, bibpath, outname, ignore = []):
    files = [f for f in listdir(filepath) if isfile(join(filepath, f))]
    bib_keys = getbibkeys(bibpath + '/all-software-engineering-rwth-references.bib')
    bib_keys_extern = getbibkeys(bibpath + '/additional-bib-entries.bib')
    bib_keys.extend(ignore)
    bib_keys.extend(bib_keys_extern)
    with open(outname+".md", "w") as text_file:
        for file in files:
            keys = getmdkeys(filepath + '/' + file)
            missing = checkkeys(keys, bib_keys)
            text_file.write('### Missing keys from ' + file + ':\n')
            for key in missing:
                text_file.write('* ' + key + '\n')
            text_file.write('\n'+'Checked keys ' + file + ':')
            text_file.write(str(keys) + '\n')


if __name__ == "__main__":
    main('_pages/research', 'assets/bibliography', 'research')
    main('_pages/projects', 'assets/bibliography', 'projects')
    main('_pages', 'assets/bibliography', 'pages')
