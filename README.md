# js101

Notes and sample programs for learning basics of Javascript

# Dev Tools - Chrome/Brave

- To inspect an elemnt => **cntr + shift + i**
- Filter classes above (use **filter:**)
- **Add class** to an element => **click on .cls** and enter class name
- **Add pseudo-state** to a class (:active, :focus, :hover, :visited) => **click on .hov**
- **Change the dimensions** of an element => click on **play button** to see **box-model** and change values accordingly

- Toggle css attribures => **check/uncheck** on the box before the property
- Properties with **cut (--)** on them are invalid or overridden => to apply it (eg we ant to apply font-size:10px; which is cut) **filter** font-size and the **check/uncheck** accordingly.
- View only the CSS that's actually applied to an element => Click on **Computed** right next to Styles

- To open **command pallete** of dev tools => **cntrl + shift + p**
- command 1: > **Show Coverage**( shows how much CSS (and JavaScript) is used from each file that the browser loads. )
- command 2: > **Show Rulers on Hover**

- The **Dom tree** of a selected element is just below the html doc and just above the elements,computed tab.
- We can also navigate the DOM tree using **arrow keys** on keyboard.
- You can search the DOM Tree by string, CSS selector, or XPath selector => **cntl + F**
- To **reorder DOM elements** like li, **click** li element in html doc **and drag** where you want to position it.
- To **hide** a DOM element - press **'H'** Key.
- Press the **Escape** key to open js console in dev tools.
- **type `$0`** in the console to **access** selected element.
- **right click** on an element in html doc and press **"Store as global variable"** to access in the **console as temp1,2----**

# Simulate mobile devices with Device Mode

- Click **Toggle Device Toolbar** to open the UI that enables you to simulate a mobile viewport.
- To show media query breakpoints above your viewport, click More options. **More options > Show media queries**. The grey bar above orange and blue shows different media queries.
- In ... options youll also find **ADD DEVICE PIXEL RATIO && ADD DEVICE TYPE**.
- You can also **Rotate device** and **Select the device** from the Dimensions list.
- Other options : **SHOW RULERS, SHOW DEVICE FRAME, ADD CUSTOM MOBLILE, ZOOM VIEWPORT AND CAPTURE SCREENSHOT** .

- **THROTTLE the Network(Enable fast 3G throttling or Enable slow 3G throttling) and CPU (4x slower and 6x slower) : In network and performance tabs besides styles and computed**.
- Emulate Sensors : open command pallete and type **SHOW SENSORS** => 3 things : Location , Orientation and Touch(force).

# Debug JS

- JS is debugged in **SOURCES** panel (besides styles and computed). It has 3 parts: 1.File Navigator 2. Code Editor 3. Debugger pane.

- Don't use console.log() to fix bugs, instead run code line by line. This is the function of a **debugger**.

- Add breakpoints, conditional-breakpoints and log points and console.different funcs to debug productively.
