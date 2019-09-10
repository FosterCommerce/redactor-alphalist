# Redactor Alphalist Plugin

Redactor allows you to create ordered lists and unordered lists, but you can't change the list style types.

Numbered list:
```
1. Item
2. Item
3. Item
```

Lettered list:
```
A. Item
B. Item
C. Item
```

This plugin creates a Redactor toolbar button (added after the lists button) for lettered lists. Use the button just like you would use the ordered list or unordered list dropdown items in the toolbar.

## To install in Craft CMS 3:

*Requirements: Craft CMS 3 with Redactor plugin; custom Redactor config(s).*

1. Download the repository.
2. Move or copy the `alphalist` directory into the `config/redactor/plugins` directory in your Craft site.
3. To use the plugin in a Redactor config, include it in the plugins list:   `"plugins": [ "alphalist"]`. 

## Roadmap

1. Custom icon for the button.
2. Refactor JS.
3. Make this a Craft plugin?
4. Allow mixing letters, numbers, and bullets at different list levels.

## Credits

Developed by Katie Fritz for [Foster Commerce](https://fostercommerce.com).