/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('zh-Hans', {
  // layout/language
  language: 'zh',
  englishName: 'Chinese (Simplified, PRC)',
  nativeName: '中文(中华人民共和国)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'yyyy/M/d', // use four digit year
      medium: 'yyyy年M月d日',
      long: 'yyyy年M月d日',
      full: 'yyyy年M月d日EEEE',
      month: 'M月d日',
      year: 'yyyy年M',
      timestamp: 'HH:mm:ss',
      datetime: 'yyyy/M/d ah:mm',
      timezone: 'yyyy/M/d ah:mm zz',
      timezoneLong: 'yyyy/M/d ah:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      abbreviated: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
      narrow: ['日', '一', '二', '三', '四', '五', '六']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      abbreviated: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'ah:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['上午', '下午']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '¥',
  currencyFormat: '¤ ###',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '###%',
    minusSign: '-',
    decimal: '.',
    group: ',',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: '版权所有 &copy; {0} Infor。保留所有权利。此处的文字信息和设计标志均为 Infor 和/或其关联公司及子公司的商标和/或注册商标。保留所有权利。在此所列举的其它商标则属于其各自拥有人的财产。' },
    Actions: { id: 'Actions', value: '操作', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: '附加项目', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: '添加', comment: 'Add' },
    AddComments: { id: 'AddComments', value: '添加备注', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: '新增选项卡', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: '停职', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: '创建高级筛选器', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: '警报', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: '页面的警报消息', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: '全部', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: '所有结果(针对)', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: '底部对齐', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: '水平居中', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: '琥珀色', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: '紫水晶色', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: '应用', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: '菜单', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: '附加', comment: 'Attach' },
    Available: { id: 'Available', value: '可用', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: '蔚蓝色', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: '背景颜色', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: '介于', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: '右缩进', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: '粗体', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: '已加为书签', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: '加为书签', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: '痕迹', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: '浏览器', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: '项目符号列表', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: '日历', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: '相机', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: '取消', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: '启用大写锁键', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: '购物车', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: '中心', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: '剩余字符数 {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: '字符数上限 ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. 若要更改选择，请使用箭头键。', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: '更改视图', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: '复选框', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: '已选中', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: '清除', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: '清除筛选器', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: '清除格式', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(清除选择项目)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: '时钟', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: '关闭', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: '在编辑器中可点击', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: '复制', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: '折叠', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: '折叠应用托盘', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: '列', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: '备注', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: '公司假期', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: '组件', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: '组成', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: '已完成', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: '确认', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: '页面的确认消息', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: '已启用 Cookie', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: '包含', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css 类', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: '剪切', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: '日期', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: '天', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: '天 ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '超出天数为 {0}', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '剩余天数为 {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: '删除', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: '设备', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: '水平分布', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: '文档', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: '自行决定的休假', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: '行已更改', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: '向下钻取', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: '向上钻取', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: '下拉', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: '不包含', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: '结尾不为', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: '不等于', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: '开头不为', comment: 'For condition filtering' },
    Down: { id: 'Down', value: '向下', comment: 'Down tooltip' },
    Download: { id: 'Download', value: '下载', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: '复制', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: '选定项或非选定项', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: '结尾为', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: '在此输入备注...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: '错误', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: '文件类型无效', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: '超出文件大小上限', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: '超出允许的文件数量上限', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: '页面的错误消息', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: '电子邮件地址无效', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: '翠绿色', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: '展开', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: '展开应用托盘', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: '展开/折叠', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: '导出为电子表格', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: '编辑', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: '等于', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: '事件', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: '退出完整视图', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: '导出', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: '导出至 Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: '收藏夹', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: '文件上传。按 Enter 浏览文件', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: '字段筛选器', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: '筛选器', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: '第一页', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: '文件夹', comment: 'Folder tooltip' },
    From: { id: 'From', value: '自', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: '完整视图', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: '前进', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: '回退', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: '向下', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: '向上', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: '来吧', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: '石墨色', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: '大于或等于', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: '大于', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: '网格', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: '小时', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: '小时', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: '领先的三个', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: '领先的四个', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: '最高', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: '主页', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'HTML 视图', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: '图像', comment: 'Image of something' },
    Import: { id: 'Import', value: '导入', comment: 'Import tooltip' },
    Info: { id: 'Info', value: '信息', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: '页面的信息性消息', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: '进行中', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: '插入', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: '插入定位标记', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: '插入图像', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: '插入链接', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: '插入 URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: '斜体', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: '无效日期', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: '无效时间', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: '库存', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: '在范围内', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: '为空', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: '非空', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: '所选项目', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: '中心', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: '左对齐', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: '右对齐', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: '关键字', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: '启动', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: '最后一页', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: '左', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: '图例', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: '小于或等于', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: '小于', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: '链接', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: '加载', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: '正在加载', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: '区域设置', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: '已锁定', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: '注销', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: '查找', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: '最低', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: '邮件', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Pin', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: '最大化', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: '中值', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: '中等', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: '菜单', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: '分享到 Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: '分钟', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: '最小化', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: '减', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: '移动设备', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: '月', comment: 'As in a date month' },
    More: { id: 'More', value: '更多...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: '更多操作', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: '左移', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: '右移', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: '修改时间', comment: 'for modified form fields' },
    New: { id: 'New', value: '新', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: '新文档', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: '新项目', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: '新窗口', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: '下一个', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: '下一页', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: '下月', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: '否', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: '无可用数据', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: '无可用数据，重新设置筛选以看到更多结果。', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: '无可用数据，在以上列出的列表中作选择以看到更多结果。', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: '无', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: '无结果', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: '普通', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: '注释', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: '未选择', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: '编号列表', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: '确定', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: '打开/后退/关闭', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: '打开/关闭', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: '操作系统', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: '插入/移除编号列表', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: '页面 ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: '第 {0} 页，共 {1} 页', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: '您正在页面 ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: '带薪休假', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: '粘贴', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>密码必须满足以下条件</strong> <br>至少为 10 个字符长<br>至少包含一个大写字符<br>至少包含一个小写字符<br>包含一个特殊字符<br>不包含您的用户名<br>不是先前用过的密码<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: '密码必须匹配', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: '峰值', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: '待定', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: '列个性化设置', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: '计划', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: '平台', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: '期间', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: '按“向下箭头”以选择日期', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: '按 Shift+F10 打开上下文菜单。', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: '上一步', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: '上月', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: '上一页', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: '打印', comment: 'Print tooltip' },
    Range: { id: 'Range', value: '范围', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '每页 {0} 条记录', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: '重做', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: '将行重新排序', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: '刷新', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: '申请休假', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: '必填', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: '重置', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: '重置为默认值', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: '结果', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: '结果', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: '右对齐', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: '右对齐', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: '右', comment: 'Right' },
    Roles: { id: 'Roles', value: '角色', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: '行高', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: '红宝石色', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: '运行筛选器', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: '相同窗口', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: '保存', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: '保存当前视图', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: '已保存的视图', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: '日程', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: '秒', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: '搜索', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: '搜索列名称', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: '搜索文件夹', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: '搜索列表', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: '选择', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: '选择一个日期', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: '选定项', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: '全选', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: '发送', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: '设置时间', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: '设置', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: '短', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: '显示筛选行', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: '显示更少', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: '显示更多', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: '病假', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: '蓝灰色', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '幻灯片 {0}，总数 {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: '幻灯片 {0} 和 {1}，总数 {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: '把手(用于)', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: '把手使用范围上限', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: '把手范围下限', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: '跳转到主内容', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: '状态', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: '开头为', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '已完成 {0} 步，共 {1} 步', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: '穿透', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: '升序排序', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: '降序排序', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: '向下排序', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: '向上排序', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: '下标', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: '上标', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: '选项卡...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Pin', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: '高', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: '目标', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: '团队事件', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: '测试区域设置默认值', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: '文本颜色', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: '拖放要上传的文件', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: '拖放上传或<span class="hyperlink">选择</span>要上传的文件', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: '取消上传此文件', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: '关闭此错误', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: '关闭此错误', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: '计时器', comment: 'Timer tooltip' },
    To: { id: 'To', value: '至', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: '今天', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: '切换粗体文本', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: '切换标题 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: '切换标题 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: '切换斜体文本', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: '切换下划线文本', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: '工具栏', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: '顶端对齐', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: '合计', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: '合计', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: '折叠树形结构', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: '展开树形结构', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: '绿松石色', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: '向上', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: '即将到来的事件', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: '即将到来的休假', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: '上传', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: '不可用日期', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: '下划线', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: '撤销', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: '已解锁', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: '插入/移除项目符号列表', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: '该内容不可用，因为它使用了您的当前浏览器版本不支持的功能。', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. 使用箭头键来选择。', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. 使用 Enter 或向下箭头来查找。', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: '用户', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: '用户配置文件', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS 版本', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: '垂直居中对齐', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: '查看源', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: '视图对象', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: '周', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: '年度', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: '是', comment: 'On a dialog button' }
  }
});
