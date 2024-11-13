import React from "react";
import "../styles/CSS.css";
import Section from "../components/Section";

const CSS = () => {
  return (
    <>
      <div className="title">CSS Concepts</div>

      {/* Flexbox Section */}
      <Section title="Flexbox">
      <div className="section-content">
          The flex box model requires a <b>flex container</b> and within it <b>flex items</b>. We can make the flex container flexible by setting its display to flex.
          <br /><br />
          The different flex-container properties are demonstrated below:
          <div className="subsection">
            <div className="subsection-title">
              flex-direction
            </div>
            <div className="subsection-content">
              It can take a value <b>row</b>:
              <div className="flex-container row">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>column</b>:
              <div className="flex-container column">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>row-reverse</b>:
              <div className="flex-container row-reverse">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>column-reverse</b>:
              <div className="flex-container column-reverse">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex-wrap
            </div>
            <div className="subsection-content">
              It can take a value <b>wrap</b>:
              <div className="flex-container wrap">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>nowrap</b>:
              <div className="flex-container nowrap">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>wrap-reverse</b>:
              <div className="flex-container wrap-reverse">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex-flow
            </div>
            <div className="subsection-content">
            This property is just a shorthand to combine the flex direction and flex wrap properties. For instance, <b>row wrap</b> applies row to flex direction and wrap to flex wrap properties.
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              justify-content
            </div>
            <div className="subsection-content">
              It can take a value <b>center</b>:
              <div className="flex-container center">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>flex-start</b>:
              <div className="flex-container flex-start">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>flex-end</b>:
              <div className="flex-container flex-end">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>space-around</b>:
              <div className="flex-container space-around">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              It can take a value <b>space-between</b>:
              <div className="flex-container space-between">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              align-items
            </div>
            <div className="subsection-content">
              It can take a value <b>center</b>:
              <div className="flex-container center ai">
                <div className="flex-item one">1</div>
                <div className="flex-item two">2</div>
                <div className="flex-item three">3</div>
              </div>
              It can take a value <b>flex-start</b>:
              <div className="flex-container flex-start ai">
                <div className="flex-item one">1</div>
                <div className="flex-item two">2</div>
                <div className="flex-item three">3</div>
              </div>
              It can take a value <b>flex-end</b>:
              <div className="flex-container flex-end ai">
                <div className="flex-item one">1</div>
                <div className="flex-item two">2</div>
                <div className="flex-item three">3</div>
              </div>
              It can take a value <b>stretch</b>:
              <div className="flex-container stretch ai">
                <div className="flex-item one">1</div>
                <div className="flex-item two">2</div>
                <div className="flex-item three">3</div>
              </div>
              It can take a value <b>baseline</b>:
              <div className="flex-container baseline ai">
                <div className="flex-item one">1</div>
                <div className="flex-item two">2</div>
                <div className="flex-item three">3</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              align-content
            </div>
            <div className="subsection-content">
              It can take a value <b>center</b>:
              <div className="flex-container center ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>flex-start</b>:
              <div className="flex-container flex-start ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>flex-end</b>:
              <div className="flex-container flex-end ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>stretch</b>:
              <div className="flex-container stretch ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item" style={{lineHeight: '60px'}}>27</div>
              </div>
              It can take a value <b>space-around</b>:
              <div className="flex-container space-around ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
              It can take a value <b>space-between</b>:
              <div className="flex-container space-between ac">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
                <div className="flex-item">11</div>
                <div className="flex-item">12</div>
                <div className="flex-item">13</div>
                <div className="flex-item">14</div>
                <div className="flex-item">15</div>
                <div className="flex-item">16</div>
                <div className="flex-item">17</div>
                <div className="flex-item">18</div>
                <div className="flex-item">19</div>
                <div className="flex-item">20</div>
                <div className="flex-item">21</div>
                <div className="flex-item">22</div>
                <div className="flex-item">23</div>
                <div className="flex-item">24</div>
                <div className="flex-item">25</div>
                <div className="flex-item">26</div>
                <div className="flex-item">27</div>
              </div>
            </div>
          </div>
          <br />
          The different flex-item properties are demonstrated below:
          <div className="subsection">
            <div className="subsection-title">
              order
            </div>
            <div className="subsection-content">
              The order field can be used to assign values to rearrange items:
              <div className="flex-container">
                <div className="flex-item order3">1</div>
                <div className="flex-item order2">2</div>
                <div className="flex-item order4">3</div>
                <div className="flex-item order1">4</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex-grow
            </div>
            <div className="subsection-content">
              An item(eg. here: 3) can take a value for <b>flex-grow</b>:
              <div className="flex-container">
                <div className="flex-item grow1">1</div>
                <div className="flex-item grow1">2</div>
                <div className="flex-item grow8">3</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex-shrink
            </div>
            <div className="subsection-content">
            An item(eg. here: 3) can take a value for <b>flex-shrink</b>:
              <div className="flex-container fi-shrink">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item shrink">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
                <div className="flex-item">7</div>
                <div className="flex-item">8</div>
                <div className="flex-item">9</div>
                <div className="flex-item">10</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex-basis
            </div>
            <div className="subsection-content">
            An item(eg. here: 3) can take a value for <b>flex-basis</b>:
              <div className="flex-container fi-basis">
              <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item basis">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              flex
            </div>
            <div className="subsection-content">
              This property can be used in place of all <b>flex-grow</b>, <b>flex-shrink</b> and <b>flex-basis</b>. For instance, <b>flex: 0 0 200px</b> applies 0 to flex-grow, 0 to flex-shrink and 200px to flex-basis.
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">
              align-self
            </div>
            <div className="subsection-content">
            An item(eg. here: 2) can take a value for <b>align-self</b>:
              <div className="flex-container as-center">
                <div className="flex-item">1</div>
                <div className="flex-item center">2</div>
                <div className="flex-item">3</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Grid Section */}
      <Section title="Grid">
        The grid container displays items in a grid layout. The different properties it can take are:
          <ul>
            <li><b>gap</b> and <b>grid-gap</b> control spacing between rows and columns.</li>
            <li><b>grid</b> is a shorthand for multiple grid layout properties (like rows, columns, areas, and flow).</li>
            <li><b>grid-area</b> can assign a name or specify item placement in terms of rows and columns.</li>
            <li><b>grid-auto-columns</b> and <b>grid-auto-rows</b> define default sizes for columns and rows, respectively.</li>
            <li><b>grid-auto-flow</b> determines how items are automatically placed in the grid.</li>
            <li><b>grid-column</b> and <b>grid-row</b> are shorthand for specifying the start and end points of columns and rows.</li>
            <li><b>grid-column-gap</b> and <b>grid-row-gap</b> control the space between columns and rows individually.</li>
            <li><b>grid-template-rows</b>, <b>grid-template-columns</b>, and <b>grid-template-areas</b> define the structure and sizing of grid rows, columns, and named areas.</li>
          </ul>
        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>
      </Section>

      {/* Position Section */}
      <Section title="Positions">
        The <b>position</b> property in CSS defines how an element is positioned within its containing element. There are five main position values:
          <ul>
            <li><b>static</b>: The default value. Elements are positioned according to the normal document flow, without any specific positioning. Top, right, bottom, or left values have no effect.</li>
            <li><b>relative</b>: Positions an element relative to its normal position in the document flow. You can adjust it using top, right, bottom, or left, but it still occupies space in the flow.</li>
            <li><b>fixed</b>: Positions an element relative to the viewport, meaning it stays in the same place even when the page is scrolled. It does not affect the layout of other elements.</li>
            <li><b>absolute</b>: Positions an element relative to its nearest positioned ancestor (an element with position other than static). If no such ancestor exists, it is positioned relative to the initial containing block (usually the html or body tag).</li>
            <li><b>sticky</b>: A hybrid of relative and fixed positioning. The element is treated as relative until it reaches a defined scroll position, at which point it "sticks" and behaves like a fixed element.</li>
          </ul>
        <div className="container-p">
          <div className="position-relative">Relative Position
            <div className="position-absolute">Absolute Position</div>
            <div className="position-fixed">Fixed Position</div>
          </div>
        </div>
      </Section>

      {/* Z-Index Section */}
      <Section title="Z-Index">
        The <b>z-index</b> property determines the z-axis order of elements. Higher values are in front of lower values.
        <div class="zi-container">
          <div class="black-box">Black box</div>
          <div class="gray-box">Gray box</div>
          <div class="green-box">Green box</div>
        </div>
      </Section>

      {/* Box-Sizing Section */}
      <Section title="Box-Sizing">
        The <b>box-sizing</b> property in CSS controls how the width and height of an element are calculated.
        <br />By default, the width and height only apply to the content area, and padding and borders are added on top, increasing the total size. 
        <br />But, when box-sizing is set to <b>border-box</b>, the padding and border are included in the width and height,
        making it easier to manage the overall size of elements without the need for additional calculations.
        <br /><br />
        <div className="box-sizing-1">Border-box 1 (they are of the same size now)</div>
        <div className="box-sizing-2">Border-box 2</div>
      </Section>

      {/* Pseudo Classes Section */}
      <Section title="Pseudo Classes">
      Pseudo-classes are used to style elements based on their state, position, or user interaction, without needing to add extra classes or IDs. The most commonly used pseudo-classes include:
        <ul>
          <li><b>:hover</b>: Targets an element when the user hovers over it and can be used for links.</li>
          <li><b>:active</b>: Applies styles when an element is being activated, such as when a button is clicked or a link is pressed.</li>
          <li><b>:first-child</b>: Selects the first child element within a parent.</li>
          <li><b>:nth-child()</b>: Allows for more advanced selection of elements in the parent. For instance, nth-child(2) targets the second child, and nth-child(odd) or nth-child(even) selects alternating items.</li>
          <li><b>:before</b> and <b>:after</b>: Insert content before or after an element’s actual content.</li>
        </ul>
        An example for hover is illustrated below:
        <div className="pseudo-class-hover">Hover me</div>
      </Section>
    </>
  );
};

export default CSS;
