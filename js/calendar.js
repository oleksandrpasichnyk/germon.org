document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  const { pathname } = window.location;
  const localeName = pathname?.replace(/\/$/, "")?.split("/")?.pop();

  const locales = {
    'en': 'en',
    'ua': 'uk',
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap',
    locale: locales[localeName],
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'today,prev,next',
      center: 'title',
      right: 'dayGridDay,dayGridWeek,dayGridMonth'
    },

    displayEventTime: false, // don't show the time column in list view

    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: 'AIzaSyDSBCaOhrRViBVidxG2Mu7bkCGBRmerMGI',

    // US Holidays
    events: {
      googleCalendarId: 'mount.germon@gmail.com',
    },

    eventClick: function(arg) {
      // opens events in a popup window
      window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

      arg.jsEvent.preventDefault() // don't navigate in main tab
    },

    loading: function(bool) {
      document.getElementById('loading').style.display =
        bool ? 'block' : 'none';
    }

  });

  calendar.render();
});