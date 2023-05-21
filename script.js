
var city = [

    "ADANA",
    "ADIYAMAN",
    "AFYONKARAHİSAR",
    "AĞRI",
    "AMASYA",
    "ANKARA",
    "ANTALYA",
    "ARTVİN",
    "AYDIN",
    "BALIKESİR",
    "BİLECİKK",
    "BİNGÖL",
    "BİTLİS",
    "BOLU",
    "BURDUR",
    "BURSA",
    "ÇANAKKALE",
    "ÇANKIRI",
    "ÇORUM",
    "DENİZLİ",
    "DİYARBAKIR",
    "EDİRNE",
    "ELAZIĞ",
    "ERZİNCAN",
    "ERZURUM",
    "ESKİŞEHİR",
    "GAZİANTEP",
    "GİRESUN",
    "GÜMÜŞHANE",
    "HAKKARİ",
    "HATAY",
    "ISPARTA",
    "MERSİN",
    "İSTANBUL",
    "İZMİR",
    "KARS",
    "KASTAMONU",
    "KAYSERİ",
    "KIRKLARELİ",
    "KIRŞEHİR",
    "KOCAELİ",
    "KONYA",
    "KÜTAHYA",
    "MALATYA",
    "MANİSA",
    "KAHRAMANMARAŞ",
    "MARDİN",
    "MUĞLA",
    "MUŞ",
    "NEVŞEHİR",
    "NİĞDE",
    "ORDU",
    "RİZE",
    "SAKARYA",
    "SAMSUN",
    "SİİRT",
    "SİNOP",
    "SİVAS",
    "TEKİRDAĞ",
    "TOKAT",
    "TRABZON",
    "TUNCELİ",
    "ŞANLIURFA",
    "UŞAK",
    "VAN",
    "YOZGAT",
    "ZONGULDAK",
    "AKSARAY",
    "BAYBURT",
    "KARAMAN",
    "KIRIKKALE",
    "BATMAN",
    "ŞIRNAK",
    "BARTIN",
    "ARDAHAN",
    "IĞDIR",
    "YALOVA",
    "KARABüK",
    "KİLİS",
    "OSMANİYE",
    "DÜZCE"
];

jQuery(document).ready(function ($) {
    $("#form-city").autocomplete({
        source: city
    });
    $(function () {
        $("#dialog").dialog();
    });


});


$(document).ready(function () {

    myEvents = [
        {
            id: "required-id-1",
            name: "New Year",
            date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
            type: "holiday",
            everyYear: true
        },
        {
            id: "required-id-2",
            name: "Valentine's Day",
            date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
            type: "holiday",
            everyYear: true,
            color: "#222"
        },
       

    ];


    $('#evoCalendar').evoCalendar({
        calendarEvents: myEvents,
        theme: 'Midnight Blue'
    });

    $("#evoCalendar").evoCalendar('addCalendarEvent', [
        {
            name: "ANKARA CONCERT",
            date: "May/16/2023",
            type: "event",
            everyYear: true
        },
        {
            name: "ANTALYA CONCERT",
            date: "May/27/2023",
            type: "event",
            everyYear: true
        },
        {
            name: "İSTANBUL CONCERT",
            date: "May/5/2023",
            type: "event",
            everyYear: true
        },
        {
            name: "İZMİR CONCERT",
            date: "May/19/2023",
            type: "event",
            everyYear: true
        },
        {
            name: "Fan meeting and signing day",
            date: "May/5/2023",
            type: "birthday",
            everyYear: true
        }
    ]);




});

$(document).ready(function () {

$.fancyMessenger({
    onSend:function(obj){
      // Send your message here.
      console.log($(obj).find("textarea").val());
    }
  });
});

$(document).ready(function () {

    $("#subbutton").click(function () { 
      
         
          // Checking for blank fields.
          if ($("#form-name").val() == '' || $("#form-email").val() == '' || $("#form-city") == '' || $("#textarea").val() == '') {
            alert("Please Fill Required Fields");
          } else {
      
           alert("Your message has been sent successfully.");
          }
        });
    });

    
