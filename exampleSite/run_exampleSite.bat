:: This file will start hugo serving the exampleSite on an MS Windows system
:: This file should not be copied if you use the exampleSite as a template for a site
:: because it will not not work in a normal setup where themes are located in a "themes"
:: folder next to the content.
start "http://127.0.0.1:1313"
hugo serve --themesDir ..\..
