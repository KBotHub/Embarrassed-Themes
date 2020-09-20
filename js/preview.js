document.getElementById("monaco_container").style.display = "none";
if(location.href.substring(location.origin.length+location.pathname.length)=='EDT'){
   theme='Embarrassed-Dark-Theme';
}else if(location.href.substring(location.origin.length+location.pathname.length)=='ELT'){
   theme='Embarrassed-Light-Theme';
}else if(location.href.substring(location.origin.length+location.pathname.length)=='VSL'){
   theme='vs-light';
}else if(location.href.substring(location.origin.length+location.pathname.length)=='VSD'){
   theme='vs-dark';
}else if(location.href.substring(location.origin.length+location.pathname.length)=='HCD'){
   theme='hc-dark';
}else{
   theme='vs-dark';
}
require.config({
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.16.2/min/vs'
    }
});
require(['vs/editor/editor.main'], function() {
    monaco.editor.defineTheme('Embarrassed-Dark-Theme', {
        base: 'vs-dark',
        type: 'Dark',
        inherit: false,
        rules: [{
                token: '',
                foreground: 'BDBDBD',
                background: '333333'
            },
            {
                token: 'invalid',
                foreground: 'cd3131'
            },
            {
                token: 'emphasis',
                fontStyle: 'italic'
            },
            {
                token: 'strong',
                fontStyle: 'bold'
            },

            {
                token: 'variable',
                foreground: 'BDBDBD'
            },
            {
                token: 'variable.predefined',
                foreground: 'BDBDBD'
            },
            {
                token: 'constant',
                foreground: '00ffff'
            },
            {
                token: 'comment',
                foreground: '636363',
                'fontStyle': 'italic'
            },
            {
                token: 'number',
                foreground: 'D400FF'
            },
            {
                token: 'number.hex',
                foreground: '3030c0'
            },
            {
                token: 'regexp',
                foreground: '00ffff'
            },
            {
                token: 'annotation',
                foreground: '808080'
            },
            {
                token: 'type',
                foreground: 'ffc400'
            },
            {
                token: 'delimiter',
                foreground: 'BDBDBD'
            },
            {
                token: 'key',
                foreground: 'ff00b3'
            },
            {
                token: 'string.key.json',
                foreground: 'ff00b3'
            },
            {
                token: 'string.value.json',
                foreground: 'ffc400'
            },
            {
                token: 'attribute.name',
                foreground: 'FF0000'
            },
            {
                token: 'attribute.value',
                foreground: '0451A5'
            },
            {
                token: 'attribute.value.number',
                foreground: '09885A'
            },
            {
                token: 'attribute.value.unit',
                foreground: '09885A'
            },
            {
                token: 'string',
                foreground: '59ffc8'
            },
            {
                token: 'keyword',
                foreground: 'ff00b3',
                fontStyle: 'italic'
            },
        ],
        colors: {
            'editorBackground': '#333333',
            'editorForeground': '#BDBDBD',
            'editorGuide': '#141414',
            'editorInvisibles': '#141414',
            'tabsContainerBackground': '#141414',
            'inactiveTabBackground': '#171717',
            'sideBarBackground': '#141414',
            'panelBackground': '#141414',
            'activityBarBackground': '#171717',
            'activityBadgeBackground': '#5555FF',
            'inputBoxBackground': '#000000',
            'dropdownBackground': '#333333',
            'statusBarBackground': '#333333',
            'statusBarNoFolderBackground': '#0d0d0d',
            'statusBarDebuggingBackground': '#5555FF',
            'focusedElementOutline': '#5555FF',
            'editorPeekEditorBackground': '#0d0d0d',
            'editorPeekTitleBackground': '#111111',
            'editorPeekBorder': '#5555FF',
            'editorPeekResultsBackground': '#141414',
            'editorFindWidgetBackground': '#141414',
            'editorFindInputBackground': '#171717',
            'editorFindCheckedBorders': '#5555FF',
            'editorMarkerNavigationBackground': '#141414'
        }
    });
    editor = monaco.editor.create(document.getElementById('monaco_container'), {
        value: _data.value,
        language: _data.language,
        theme: theme,
        fontFamily: 'JetBrainsMono-Regular',
        automaticLayout: true
    });
    editor.createContextKey( /*key name*/ 'beautifier', /*default value*/ true);
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_B, function() {
        editor.getAction('editor.action.formatDocument').run()
    }, 'beautifier');
    editor.createContextKey( /*key name*/ 'DEFAULT-JS', /*default value*/ true);
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function() {
        editor.setValue([
            'const scriptName = \"scriptName\";',
            '/**',
            ' * (string) room',
            ' * (string) sender',
            ' * (boolean) isGroupChat',
            ' * (void) replier.reply(message)',
            ' * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환',
            ' * (string) imageDB.getProfileBase64()',
            ' * (string) packageName',
            ' */',
            'function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {',
            '\t//여기에 코드를 입력',
            '}',
            '',
            '//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.',
            'function onCreate(savedInstanceState, activity) {',
            '\tvar textView = new android.widget.TextView(activity);',
            '\ttextView.setText("Hello, World!");',
            '\ttextView.setTextColor(android.graphics.Color.DKGRAY);',
            '\tactivity.setContentView(textView);',
            '}',
            '',
            'function onStart(activity) {}',
            '',
            'function onResume(activity) {}',
            '',
            'function onPause(activity) {}',
            '',
            'function onStop(activity) {}'
        ].join('\n'))
    }, 'DEFAULT-JS');
    editor.focus();
});
$("#monaco_container").fadeIn()
