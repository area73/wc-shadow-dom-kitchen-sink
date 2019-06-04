# wc-shadow-dom-kitchen-sink
Demos and POC about Web Components (with lit-html &amp; litElement) and Shado DOM



## Working with slotted components
When we work with slots , the slotted HTML will not be inside shadow Root and there fore styling will need to be apply from the outside

The problem that we are facing is that, using the exact same markup, any thing that is inside the slot will not be styled with custom component styles <br>
No matter how deep is your slot inside the WC, it will be place outside the shadow root of the WC, so you may expect unwanted style issues

## Comparation between SHADOW / NO SHADOW / ADOPTED STYLES (new spec)

Trying top render 10.000 instances of the same component.
    SHADOW ==> will be the slower one
    NO SHADOW & ADOPTED STYLES => they render about the same time

The advantage os using ADOPTED STYLES is that it's been applying the shadow DOM to the component
The drawback of Adopted Styles is that is relatively new and only compatible with Chrome > 73 & Opera


## Using WC parent as an IFRAME

Trying to applying the concept on IFRAME, We create a custom element that will be the parent of all 
other webComponents.

This component will have Shadow DOM apply to it , but the rest of the components (child components)
 will not have Shadow DOM.

With this approach only the top component is the one that has shadow DOM and the rest will 
inherit styles from its parent.
 

# Further reading

https://developers.google.com/web/updates/2019/02/constructable-stylesheets

https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/

https://stackoverflow.com/questions/53244494/correct-way-to-apply-global-styles-into-shadow-dom

https://www.webcomponents.org/community/articles/web-components-best-practices

https://developers.google.com/web/fundamentals/web-components/best-practices

https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813

https://github.com/praveenpuglia/shadow-dom-in-depth

Not using Shadow DOM --> // https://github.com/Polymer/polymer/issues/5011

https://medium.com/samsung-internet-dev/lessons-learned-making-our-app-with-web-components-bf55379cfcda

https://blog.sessionstack.com/how-javascript-works-the-internals-of-shadow-dom-how-to-build-self-contained-components-244331c4de6e

https://github.com/thepassle/create-lit-app-advanced

https://github.com/thepassle/create-lit-app

https://dev.to/bennypowers/lets-build-web-components-part-1-the-standards-3e85
