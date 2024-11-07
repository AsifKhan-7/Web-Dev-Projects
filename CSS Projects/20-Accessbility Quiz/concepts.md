# HTML

A useful property of an SVG (scalable vector graphics) is that it contains a path attribute which allows the image to be scaled without affecting the resolution of the resultant image.

## CSS

CSS has a max function which returns the largest of a set of comma-separated values.

```CSS
img {
  width: max(250px, 25vw);
}
```

**Explanation**

_In the above example, the width of the image will be 250px if the viewport width is less than 1000 pixels. If the viewport width is greater than 1000 pixels, the width of the image will be 25vw. This is because 25vw is equal to 25% of the viewport width._

---

### Web Accessibility Initiative

To increase the page accessibility, the role attribute can be used to indicate the purpose behind an element on the page to assistive technologies. The role attribute is a part of the Web Accessibility Initiative (WAI), and accepts preset values.

---

### What is it?

Every region role requires a label, which helps screen reader users understand the purpose of the region. One method for adding a label is to add a heading element inside the region and then reference it with the aria-labelledby attribute.

Add the following aria-labelledby attributes to the section elements:

student-info
html-questions
css-questions
Then, within each section element, nest one h2 element with an id matching the corresponding aria-labelledby attribute. Give each h2 suitable text content.

---

### Contrast Ratio:

<ul>
      <li>Contrast ko measure karne ka ek standard tareeka hai contrast ratio, jo do colors ke beech ki difference ko 1 se 21 tak scale par measure karta hai.
      <ul>
      <li>1:1 ka matlab hai dono colors bilkul same hain (yani koi contrast nahi hai).</li>
      <li>21:1 ka matlab hai maximum possible contrast (jaise pure black aur white ke beech).</li>
      </ul>
      </li>
    </ul>
