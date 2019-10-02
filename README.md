# testBar
testBar is a customizable animated bar for you page.

## Options
| Name        | Type           | Default  | Description  |
| ------------- |:-------------:| -----:|-----:|
| message      | String | Required | Message showing in bar. |
| position     | String      |   Required | Position of the bar.  `top`, `bottom` |
| callback | Function      |    True | Default value show alert with text "Hello World". You can change it, giving own function. |


## Installation

### Step 1
Download all files. Necessary: `widget.js`, `widget_style.css`
File `index.html` is for testing and for example of use. **Is not required**.

### Step 2
Add file with style to your page.     
`<link rel="stylesheet" href="widget_style.css">`

### Step 3
Add button to your page.
`<button id='button-show'>Show Bar</button>`

### Step 4
Add script with widget to your page.
`<script src="widget.js" charset="UTF-8"></script>`

### Step 5
Create and configure testBar.
***Example with default  callback method of `get widgets` button.***

```javascript
<script type="text/javascript">
        let myBar = new Bar({
            message: 'Add beautiful widgets to your website ',
            position: 'bottom',
        })
    </script>```

***Example with customized  callback method of `get widgets` button.***

```javascript
<script type="text/javascript">
		const myCallback = () => {
            alert('Customized Callback')
        }
		
        let myBar = new Bar({
            message: 'Add beautiful widgets to your website ',
            position: 'bottom',
			callback: myCallback
        })
    </script>```




