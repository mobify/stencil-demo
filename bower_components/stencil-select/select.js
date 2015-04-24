define(function() {
    var updateSelect = function($select) {
        var value = $select.find('option:selected').text();
        $select.find('.c-select__value').text(value);
    };

    var init = function() {
        $('.c-select').each(function() {
            var $this = $(this);

            if (!$this.is('.initialized')) {
                updateSelect($this);
                $this.addClass('initialized');
            }
        });

        $('body').on('change', '.c-select', function() {
            var $select = $(this);
            updateSelect($select);
        });
    };

    return {
        'init': init
    };
});
