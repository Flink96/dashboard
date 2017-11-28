$( function() {
    //datepicker init
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }

    //modal init

    var modalBtn = $('[data-modal]');

    modalBtn.on('click', function (e) {

        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).bPopup({
            closeClass: 'close'
        });
    })
    //form element styler init

    $('select').styler();

    //scrollbar init
    $('.scrollbar-inner').scrollbar();

    //chart init
    var chartBlock = document.getElementById('myChart');
    if(chartBlock){
        var myChart= new Chart(chartBlock, {
            type: 'bar',
            data: {
                labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                datasets:[
                    {
                label: 'Signups',
                data: [100,200,220,170,130,90,154,180,130],
                        backgroundColor: 'rgba[128,191,202,1)'
                    },
                    {
                        label: 'FTD',
                        data: [200,120,180,140,120,140,104,150,100],
                        backgroundColor: 'rgba[255,154,56,1)'
                    },
                    {
                        label: 'Earned',
                        data: [50,60,80,40,20,240,199,110,10],
                        backgroundColor: '#59b66d'
                    }
                ]
            },
            options: {
                responsive: true,
                scales:{
                    yAsex: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }

    //range slider init

    var handle = $('#custom-handle');
    var range = $('#slider');

    range.slider({
        value: 50,
        orientation: "horizontal",
        range: "min",
        animate: true,
        max: 200,
        
        create: function (event, ui) {
            handle.append('<span class="value">' + $( this ).slider("value") + 'hours</span>');
            var value = handle.find('.value');
            range.slider('option','valueSpan', value);
        },
        slide: function ( event, ui ) {
          range.slider("option", "valueSpan").text(ui.value + 'hours');
        }
    })
    
    console.log(handle,slider);
} );