# Development

### Initialise

When the project is first created, an initial version of the library needs to be published.

### Publish

```bash
for i in `grep -rl 'template-web-component' *`;
do 
    perl -spi -e 's/template-web-component/new-component-name/g' $i; 
done
npm run publish
```

### Build new version of GitHub Pages site

Note:  

- To publish, the user needs appropriate permissions to do so.
- Publish will fail the first time it is run, if Two Factor authentication is enabled in Github. 
- Just rerun publish step, and everything should be good from there.

```bash
npm run publish
npm run docs:build
```
### Update web_modules directory

After installing new dependencies, rebuild the web_modules

```bash
npm run docs:build
```


### Test
For development testing:

```bash
npm run demo:serve
```

For GitHub Pages demo testing:

```bash
npm run docs:serve
```

### Deploy

After publishing and building docs, commit the new files in the docs
directory, to update the GitHub Pages website.