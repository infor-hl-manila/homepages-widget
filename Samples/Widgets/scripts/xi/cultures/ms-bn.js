/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('ms-bn', {
  // layout/language
  language: 'ms',
  englishName: 'Malay (Brunei Darussalam)',
  nativeName: 'Bahasa Melayu (Brunei Darussalam)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'd/MM/yyyy', // use four digit year
      medium: 'd MMM yyyy',
      long: 'd MMMM yyyy',
      full: 'dd MMMM yyyy',
      month: 'dd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'h:mm:ss a',
      datetime: 'd/MM/yyyy h:mm',
      timezone: 'd/MM/yyyy h:mm zz',
      timezoneLong: 'd/MM/yyyy h:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
      abbreviated: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
      narrow: ['A', 'I', 'S', 'R', 'K', 'J', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
      abbreviated: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'h:mm a',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['PG', 'PTG']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '$',
  currencyFormat: '¤ ###',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    minusSign: '-',
    decimal: '.',
    group: ',',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Hak Cipta &copy; {0} Infor. Hak cipta terpelihara. Perkataan dan tanda reka bentuk yang ditetapkan di sini ialah tanda dagangan dan/atau tanda dagangan berdaftar Infor dan/atau ahli gabungan dan anak syarikatnya. Hak cipta terpelihara. Hak cipta terpelihara. Semua tanda dagangan lain yang disenaraikan di sini ialah hak milik pemiliknya masing-masing' },
    Actions: { id: 'Actions', value: 'Tindakan', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Item Tambahan', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Tambah', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Tambah Komen', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Tambah Tab Baharu', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Cuti Pentadbiran', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Cipta Penapis Lanjutan', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Isyarat', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Mesej isyarat pada halaman', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Semua', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Semua Hasil Untuk', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Jajarkan Bawah', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Jajarkan Tengah Mendatar', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Ambar', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Kecubung', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Gunakan', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Menu', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Lampirkan', comment: 'Attach' },
    Available: { id: 'Available', value: 'Tersedia', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azure', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Warna latar belakang', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Antara', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Sekat petikan', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Tebal', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Ditanda Buku', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Tanda buku ini', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Jejak', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Pelayar', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Senarai berbulet', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendar', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Batal', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Kunci Huruf Besar Hidup', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Kart', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Tengah', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Baki aksara {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Kiraan aksara maksimum ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Untuk mengubah pilihan gunakan kekunci anak panah.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Ubah Pandangan', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Kotak semak', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Disemak', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Kosongkan', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Kosongkan Penapis', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Kosongkan Pemformatan', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Kosongkan Pilihan)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Jam', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Tutup', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Boleh diklik dalam editor', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Salin', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Runtuh', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Runtuhkan Dulang Apl', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Lajur', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komen', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Cuti Syarikat', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponen', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Gubah', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Selesai', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Sahkan', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Sahkan mesej pada halaman', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Kuki Didayakan', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Mengandungi', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Kelas Css', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Potong', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Tarikh', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Hari', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Hari ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} Hari Terlewat', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} Hari Berbaki', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Padam', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Peranti', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Sebarkan Secara Mendatar', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokumen', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Masa Tamat Budi Bicara', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Baris telah berubah', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Gerudi Ke Bawah', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Gerudi Ke Atas', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Juntai Bawah', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Tidak Mengandungi', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Tidak Berakhir Dengan', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Tidak Sama Dengan', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Tidak Bermula Dengan', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Bawah', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Muat turun', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplikasi', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Sama ada Dipilih atau Tidak Dipilih', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Berakhir Dengan', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Masukkan komen di sini...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Ralat', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Jenis fail tidak dibenarkan', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Melebihi had saiz', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Melebihi had fail maksimum yang dibenarkan', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Mesej ralat pada halaman', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Alamat e-mel tidak sah', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Zamrud', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Kembangkan', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Kembangkan Dulang Apl', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Kembangkan / Runtuhkan', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Eksport sebagai Hamparan', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Edit', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Sama dengan', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Acara', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Keluar Dari Paparan Penuh', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Eksport', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Eksport ke Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Kegemaran', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Muat Naik Fail. Tekan Enter untuk Menyemak Imbas dan mencari fail', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Penapis Medan', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Penapis', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Halaman Pertama', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Folder', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Dari', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Paparan Penuh', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Bergerak Ke Depan', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Bergerak Ke Belakang', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Bergerak Ke Bawah', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Bergerak Ke Atas', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Pergi', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Lebih Besar Daripada Atau Sama Dengan', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Lebih Besar Daripada', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Grid', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Jam', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Jam', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Menuju Tiga', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Menuju Empat', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Tertinggi', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Laman Utama', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Paparan HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Imej', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Import', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Maklumat', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Mesej maklumat pada halaman', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Sedang Berjalan', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Sisip', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Sisipkan Sauh', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Sisipkan Imej', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Sisipkan Pautan', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Sisipkan Url', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Italik', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Tarikh Tidak Sah', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Masa Tidak Sah', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventori', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Dalam Julat', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Kosong', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Bukan Kosong', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Item dipilih', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Tengah', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Jajarkan Kiri', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Jajarkan Kanan', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Kata kunci', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Lancarkan', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Halaman Akhir', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Kiri', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Kurang Daripada atau Sama Dengan', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Kurang Daripada', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Pautan', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Muat', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Memuat', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Tempatan', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Dikunci', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Log Keluar', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Cari', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Terendah', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Mel', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Pin', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimumkan', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Median', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Sederhana', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Kongsi dengan Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minit', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimumkan', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Tolak', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mudah alih', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Bulan', comment: 'As in a date month' },
    More: { id: 'More', value: 'Lebih Banyak...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Lebih Banyak Tindakan', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Alih ke kiri', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Alih ke kanan', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Diubah suai', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Baharu', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Dokumen Baharu', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Item baharu', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Tetingkap Baharu', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Seterusnya', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Halaman Seterusnya', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Bulan Depan', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Tidak', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Tiada Data Tersedia', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Tiada data tersedia, buat pilihan penapis baru untuk melihat lebih banyak hasil.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Tiada data tersedia, buat pilihan di dalam senarai di atas untuk melihat lebih banyak hasil.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Tiada', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Tiada Hasil', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Nota', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Tidak Dipilih', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Senarai Nombor', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Ok', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Buka / Kembali / Tutup', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Buka / Tutup', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Sistem Operasi', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Sisipkan/Alih Keluar Senarai Bernombor', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'halaman ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Halaman {0} daripada {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Anda pada masa ini berada di halaman ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Masa Tamat Dibayar', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Tampal', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Panjang kata laluan mesti</strong><br>Sekurang-kurangnya 10 aksara<br>Mempunyai sekurang-kurangnya satu aksara huruf besar<br>Mempunyai sekurang-kurangnya satu aksara huruf kecil<br>Mengandungi satu aksara khas<br>Tidak mengandungi nama pengguna anda<br>Tidak boleh menjadi kata laluan yang digunakan sebelum ini<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Kata laluan mesti sepadan', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Waktu Puncak', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Tangguh', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Peribadikan Lajur', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Rancangan', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platform', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Tempoh', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Tekan anak panah Ke Bawah untuk memilih tarikh', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Tekan Shift+F10 untuk membuka menu konteks.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Sebelumnya', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Bulan Sebelumnya', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Halaman Sebelumnya', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Cetak', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Julat', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Rekod setiap halaman', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Buat Semula', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Susun semula Baris', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Segar semula', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Masa Tamat Permintaan', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Diperlukan', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Tetap semula', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Tetapkan Semula Kepada Lalai', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Hasil', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Hasil', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Jajarkan Kanan', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Jajarkan Kanan', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Kanan', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Peranan', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Ketinggian Baris', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Delima', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Jalankan Penapis', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Tetingkap Sama', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Simpan', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Simpan Pandangan Semasa', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Pandangan Disimpan', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Jadual', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Saat', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Gelintar', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Gelintar nama lajur', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Gelintar dalam Folder', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Senarai Gelintar', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Pilih', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Pilih Hari', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Dipilih', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Pilih Semua', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Hantar', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Tetapkan Masa', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Tetapan', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Pendek', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Tunjukkan Baris Penapis', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Tunjuk Kurang', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Tunjukkan Lebih Banyak', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Masa Sakit', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Batu Loh', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Slaid {0} daripada {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Slaid {0} dan {1} daripada {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Kendalikan untuk', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Pengendalian julat maksimum untuk', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Pengendalian julat minimum untuk', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Langkau ke Kandungan Utama', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Status', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Bermula Dengan', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} daripada {1} Langkah Selesai', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Lorek', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Isih Menaik', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Isih Menurun', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Isih Ke Bawah', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Isih Ke Atas', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Subskrip', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Superskrip', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Tab...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Pin', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Tinggi', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Sasaran', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Acara Pasukan', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Uji Lalai Tempatan', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Warna teks', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Seret dan Lepas Fail untuk Muat Naik', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Seret dan Lepas atau <span class="hyperlink">Pilih Fail</span> untuk Muat Naik', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Batal memuat naik fail ini', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Tutup ralat ini', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Tutup ralat ini', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Pemasa', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Kepada', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Hari ini', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Togol Teks Tebal', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Togol Tajuk 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Togol Tajuk 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Togol Teks Italik', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Togol Garis Bawah Teks', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Bar alat', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Jajarkan Atas', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Jumlah', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Jumlah', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Runtuhkan Pepohon', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Kembangkan Pepohon', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turkois', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Naik', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Acara Akan Datang', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Masa Tamat Akan Datang', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Muat Naik', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Tarikh Tidak Tersedia', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Garis Bawah', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Buat asal', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Dibuka kunci', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Sisipkan/Alih Keluar Senarai Berbulet', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Kandungan ini tidak tersedia kerana ia menggunakan ciri yang tidak disokong dalam versi pelayar semasa anda.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Gunakan kekunci anak panah untuk memilih.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Gunakan Enter atau anak panah ke bawah untuk mencari.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Pengguna', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profil Pengguna', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Versi IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Jajarkan Tengah Menegak', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Lihat Sumber', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Lihat Visual', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Minggu', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Tahun', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ya', comment: 'On a dialog button' }
  }
});
