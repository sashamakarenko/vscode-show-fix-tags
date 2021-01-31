# Visual Studio Code FIX protocol syntax support

This is a lightweight FIX syntax support.


## Features
- Syntax highlighting.
- Show tag names in tooltips.
- Show enum names in tooltips.

![Tag names](https://github.com/sashamakarenko/vscode-show-fix-tags/raw/master/images/sender-comp-id.png)

![Enum names](https://github.com/sashamakarenko/vscode-show-fix-tags/raw/master/images/msg-type.png)


## Tip

You can modify the SOH character color by adding the following section in your **settings.json** 

```json
{
    ...
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "comment.character.fix.soh",
                "settings": {
                    "foreground": "#444444"
                }
            }
        ]
    },
    ...
}
```
