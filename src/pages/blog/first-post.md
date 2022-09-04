---
layout: ../../layouts/BlogPost.astro
title: Accessibility, Understanding the cascade, specificity and inheritance
description: Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
pubDate: Jul 08 2022
author: Ghassan Aldarwish
heroImage: https://multichannelmerchant.com/wp-content/uploads/2021/06/dreamhost-accessibility-tips-750x498-1.jpg
---

We are going to cover:

- What is Web Accessibility?
- HTML `<title>` Tag
- HTML `<img>` alt Attribute
- Google Lighthouse
- Conflicting rules
- Cascade
- Specificity
- Inheritance
- Controlling inheritance
- Non-inheriting properties
- Exercises

## What is Web Accessibility?

[slide presentation](https://github.com/FBWE22-E08/UIB-Lessons/blob/main/2-Content/4-accessibility%2C%20Understanding%20the%20cascade%2C%20specificity%20and%20inheritance/What%20is%20web%20accessibility_.pdf)

## HTML `<title>` Tag

The `<title>` tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The `<title>` tag is required in HTML documents!

The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

```HTML
  <title>UIB - Content - Live Coding</title>

```

The `<title>` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search-engine results

Here are some tips for creating good titles:

- Go for a longer, descriptive title (avoid one- or two-word titles)
- Search engines will display about 50-60 characters of the title, so try not to have titles longer than that
- Do not use just a list of words as the title (this may reduce the page's position in search results)

So, try to make the title as meaningful as possible!
**Note:** You can NOT have more than one `<title>` element in an HTML document.

## HTML `<img>` alt Attribute

The required alt attribute specifies an alternate text for an image, if the image cannot be displayed.

The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

**Tip:** To create a tooltip for an image, use the title attribute!

```HTML
 <a href="https://unsplash.com/">
      <img src="https://static.dw.com/image/62850747_101.jpg" alt="House of the dragon" title="House of the dragon (tooltip)"/>
 </a>

```

## Google Lighthouse

![enter image description here](https://onward.justia.com/wp-content/uploads/2021/08/Website-Metrics-With-Google-Lighthouse-1024x538.png)

Lighthouse is an open source tool for running technical website audits. The tool was developed by Google, and it analyzes the following aspects of a URL: Performance, Progressive Web App, Accessibility, Best Practices and SEO.
The Lighthouse framework has already been integrated into Google’s other performance analysis tools, such as the analysis for PageSpeed Insights and the browser-based audits via the Chrome browser’s developer tools.
The audits offered by Lighthouse are grouped into five optimization categories: Performance, Best Practices, Accessibility, SEO and Progressive Web Apps.

## Conflicting rules

CSS stands for Cascading Style Sheets, and that first word cascading is incredibly important to understand — the way that the cascade behaves is key to understanding CSS.

At some point, you will be working on a project and you will find that the CSS you thought should be applied to an element is not working. Often, the problem is that you create two rules that apply different values of the same property to the same element. Cascade and the closely-related concept of specificity are mechanisms that control which rule applies when there is such a conflict. The rule that's styling your element may not be the one you expect, so you need to understand how these mechanisms work.

Also significant here is the concept of inheritance, which means that some CSS properties by default inherit values set on the current element's parent element and some don't. This can also cause some behavior that you might not expect.

## Cascade

Stylesheets cascade — at a very simple level, this means that the origin, the cascade layer, and the order of CSS rules matter. When two rules from the same cascade layer apply and both have equal specificity, the one that is defined last in the stylesheet is the one that will be used.

```HTML

<h1>This is my heading.</h1>

```

```CSS
h1 {
    color: red;
}
h1 {
    color: blue;
}

```

## Specificity

Specificity is the algorithm that the browser uses to decide which property value is applied to an element. If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element. Specificity is basically a measure of how specific a selector's selection will be:

- An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight.
- A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight.

```HTML

<h1 class="main-heading">This is my heading.</h1>

```

```CSS
.main-heading {
    color: red;
}

h1 {
    color: blue;
}

```

## Inheritance

Inheritance also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child elements, and some aren't.

For example, if you set a color and font-family on an element, every element inside it will also be styled with that color and font, unless you've applied different color and font values directly to them.

```HTML

<p>As the body has been set to have a color of blue this is inherited through the descendants.</p>
<p>We can change the color by targeting the element with a selector, such as this <span>span</span>.</p>

```

```CSS
body {
    color: green;
}

span {
    color: black;
}

```

## Controlling inheritance

Inheritance occurs in real life. Children inherit their parents’ features. Children also inherit their parents’ wealth and properties.

Though not all CSS rules/properties are inherited, all font-\* properties are inherited. This includes:

- font-size
- font-family
- font-weight
  The color property is also inherited.

Inheritance in CSS occurs when an inheritable property is not set on an element. It goes up in its parent chain to set the property value to its parent value.

When you set inherit on a CSS property, the property takes the value from the element’s parent.

This applies not only to inheritable properties, but to all CSS properties.
Let’s say we have the following:

```HTML

<div id="div1">
  Parent Div
  <div id="div1Child">Child Div 1</div>
  <div id="div2Child">Child Div 2</div>
</div>

```

```CSS

 #div1Child,  #div2Child, #div1{
	  border:1px solid;
	}

#div1 {
    width: 200px;
    color: red;

  }

  #div1Child {
    width: inherit;
  }

```

The div1 has a height set to 100px and a color set to red. The color will be inherited by the child elements. The height property is not inheritable, so the child elements won’t inherit it.

div1Child, on the other hand, has its height property set to inherit. This will make it inherit the value of its height from its parent element, div1. So the height of the div1Child will be 100px.

The inherit value enables inheritance on all CSS properties. With inherit, the specified element will take the value of the specified property from its parent element.

## Non-inheriting properties

These are properties that are not inherited or computed from the element’s parent. Its value is explicitly set or by its initial value. Most CSS properties that affect the element node are noninherited properties

The unset value works differently on inherited and noninherited CSS properties. When the unset value is set on an inherited property, it resets the property value to its inherited value. The unset value resets a noninherited property to its initial value.

Below is an example of unset in an inherited property:

```HTML
<section>
 <div class="div">Hello</div>
<section>
```

```CSS
   section {
      color: red;
    }
    div {
      color: green;
    }
    .div {
      margin-top: 8px;
      padding: 50px;
      background-color: orange;
      color: unset;
    }

```

CSS properties such as height, width, border, margin, padding, etc. are not inherited. We can enable inheritance on noninheritable CSS properties by using the inherit value.

## Adding Styles to HTML Elements(introduction)

Style information can either be attached as a separate document or embedded in the HTML document itself. These are the three methods of implementing styling information to an HTML document.

- Inline styles — Using the style attribute in the HTML start tag.
- Embedded style — Using the `<style>` element in the head section of the document.
- External style sheet — Using the `<link>` element, pointing to an external CSS files.

## Inline Styles

Inline styles are used to apply the unique style rules to an element, by putting the CSS rules directly into the start tag. It can be attached to an element using the style attribute.

```HTML
   <h2 style="color: blue">Here is h2</h2>

```

## Embedded Style Sheets

Embedded style sheets are defined in the <head> section of an HTML document using the `<style>` tag. You can define any number of `<style>` elements inside the `<head>` section.

```HTML

<head>
    <style>
       h3 {
        color: red;
      }
    </style>
</head>

```

## External style sheet

An external style sheet is ideal when the style is applied to many pages.

An external style sheet holds all the style rules in a separate document that you can link from any HTML document on your site. External style sheets are the most flexible because with an external style sheet, you can change the look of an entire website by updating just one file.

An external style sheet can be linked to an HTML document using the <link> tag.

HTML file

```HTML

<head>
    <link rel="stylesheet" href="css/style.css">
</head>

```

CSS file (style.css)

```CSS

h1 {
  color: green;
}

```

## Anatomy of a declaration (selector, declaration, property, value)

A CSS stylesheet consists of a set of rules that are interpreted by the web browser and then applied to the corresponding elements such as paragraphs, headings, etc. in the document.

A CSS rule have two main parts, a selector and one or more declarations:

![enter image description here](https://www.tutorialrepublic.com/lib/images/css-selector.png)
The selector specifies which element or elements in the HTML page the CSS rule applies to.

Whereas, the declarations within the block determines how the elements are formatted on a webpage. Each declaration consists of a property and a value separated by a colon (:) and ending with a semicolon (;), and the declaration groups are surrounded by curly braces {}.
The property is the style attribute you want to change; they could be font, color, background, etc. Each property has a value, for example color property can have value either blue or #0000FF etc.

## Writing Comments in CSS

Comments are usually added with the purpose of making the source code easier to understand. It may help other developer (or you in the future when you edit the source code) to understand what you were trying to do with the CSS. Comments are significant to programmers but ignored by browsers.

A CSS comment begins with /_, and ends with _/, as shown in the example below:

```CSS
/* This is a CSS comment */
h1 {
  color: green;
}

/* ANATOMY */
/* selector {
  property: value;
} */

/* Lists */

/* CHANGING THE LIST STYLE */

/* ul {
  list-style: square;
  list-style: none;
} */

/* NESTING AND LISTS */

li {
  list-style-type: disc;
}
/* This is a multi-line CSS comment
that spans across more than one line */
/* DESCENDANT COMBINATOR */
li li {
  list-style-type: circle;
}

```

## Lists: Indentation and Family

Lists are used all the time on the web. Articles, website navigation menus, and product features on e-commerce websites all make frequent use of lists – even when you can’t tell that a list is being used just by looking at the web page.

There are three types of lists you can use, and this quick guide will show you how to use each.

## Unordered Lists

An unordered list is a list in which the order of the list items does not matter. Unordered lists should be used when the order of the list items would not create confusion or change the meaning of the information on the list.

The ul element opens and closes an unordered list. The items on the list are contained between list item, li, tags. A simple unordered list containing three items could be created with the following HTML.

```HTML
<ul>
	<li>Item A</li>
	<li>Item B</li>
	<li>Item C</li>
</ul>


```

## Ordered Lists

Ordered lists are used for lists of items for which the order of the items does matter. The syntax for an ordered list is exactly the same as for an unordered list. However, to create an ordered list, the ol tag is used rather than the ul tag. By making this one change, we can convert the unordered list in our previous example into an ordered list.

```HTML
<ol>
	<li>Step 1</li>
	<li>Step 2</li>
	<li>Step 3</li>
</ol>



```

## list-style-type

The list-style-type property in CSS specifies the appearance of the list item marker (such as a disc, character, or custom counter style)

```CSS
list-style-type: disc|circle|square|decimal|lower-roman|upper-roman|
lower-greek|lower-latin|upper-latin|lower-alpha|upper-alpha|none|
inherit;
```

## Class and ID selectors in CSS

In CSS, class and ID selectors are used to identify various HTML elements. The main benefit of setting class or ID is that you can present the same HTML element differently, depending on its class or ID.
**Class selector**

The class selector selects elements with a specific class attribute. It matches all the HTML elements based on the contents of their class attribute. The . symbol, along with the class name, is used to select the desired class.

Classes are not unique:

- You can use the same class on multiple elements.
- You can use multiple classes on the same element.

```HTML
<p class="widget">Content</p>
```

**ID selector**
The ID selector matches an element based on the value of its id attribute. In order for the element to be selected, its ID attribute must exactly match the value given in the selector. The # symbol and the id of the HTML element name are used to select the desired element.

ID’s are unique:

- Each element can have only one ID
- Each page can have only one element with that ID

```HTML
<p id="text-content">Content</p>
```

---

<Footer>

---

### Resources:

- [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Google Lighthouse](https://www.searchmetrics.com/glossary/google-lighthouse)
- [HTML alt Attribute](https://www.w3schools.com/tags/att_img_alt.asp)
- [Understand CSS Inheritance](https://www.youtube.com/watch?v=N8tFrMZp_wA)

- [Demonstration of a Screen Reader](https://youtu.be/dEbl5jvLKGQ)
- [unset](https://developer.mozilla.org/en-US/docs/Web/CSS/unset)
- [CSS inheritance: inherit, initial, unset, and revert](https://blog.logrocket.com/css-inheritance-inherit-initial-unset-and-revert/)
