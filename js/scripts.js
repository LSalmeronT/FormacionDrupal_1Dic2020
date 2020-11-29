(function ($, Drupal, drupalSettings){
    'use strict';
    Drupal.behaviors.drupal_formacion = {
        attach: function (context,drupalSettings){
            console.log(drupalSettings);
        }
    }
})(jQuery, Drupal, drupalSettings);