/* Alpha List Plugin (by @katiemaefritz)
 * This plugin adds a toolbar button for alpha styled ordered lists.
*/

(function($R)
{
  $R.add('plugin', 'alphalist', {
    translations: {
      en: {
        "alphalist": "Lettered List",
        "errorMessage": "This only works for numbered lists. Create an numbered list first, then select it and click the button again."
      }
    },
    init: function(app)
    {
      // define app
      this.app = app;

      // define toolbar so we can add the button to it
      this.toolbar = app.toolbar;

      // define language for translations
      this.lang = app.lang;

      // define services
      this.selection = app.selection;
    },
    start: function()
    {
      // create the button data
      const buttonData = {
        title: this.lang.get('alphalist'),
        api: 'plugin.alphalist.toggle',
      };

      // create the actual button
      // TODO: get an actual icon for this
      const $button = this.toolbar.addButtonAfter('lists', 'alphalist', buttonData);
      $button.setIcon('<i class="re-icon-fontfamily"></i>');
    },
    toggle: function()
    {
      // Get the first block element containing the selection
      // We're getting the block so we ignore inline elements like <strong>
      let block = this.selection.getBlock();
      if (!block) return;

      // Get the parent of that element and figure out what it is.\
      let parent = block.parentNode;
      let parentNodeName = parent.nodeName;

      // If it's already an alpha list, make it not a list.
      if (parent.classList.contains('alpha-list')) {
        this.app.api('module.list.toggle', 'ol');
      }

      // If it isn't a list at all, make it one and update the parent.
      if (parentNodeName !== 'OL') {
        this.app.api('module.list.toggle', 'ol');
        block = this.selection.getBlock();
        parent = block.parentNode;
        parentNodeName = parent.nodeName;
      }

      // Now if we have an ordered list, make it an alpha list
      if (parentNodeName === 'OL') {
        this.$parent = $R.dom(parent);
        this.$parent.addClass('alpha-list');
      }
    }
  });
})(Redactor);