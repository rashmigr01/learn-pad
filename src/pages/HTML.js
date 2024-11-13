import React from "react";
import "../styles/HTML.css";
import Section from "../components/Section";
import image from "./image.png";

const HTML = () => {
  function showDetails(event) {
    const animalType = event.target.getAttribute("data-animal-type");
    alert("The " + event.target.innerHTML + " is a " + animalType + ".");
  }

  function renderImage() {
    return (
      <img src={image} alt="HTML semantics" />
    );
  }

  return (
    <>
      <div className="title">HTML Concepts</div>

      {/* Data Attributes Section */}
      <Section title="Data Attributes">
      <div className="section-content">
        The <b>data-*</b> attribute allows us to store custom data on HTML elements, providing a way to embed data directly in the markup without relying on any server calls or databases.
        <br />
        It consists of a prefix (data-) followed by a custom attribute name (in lowercase and at least one character long) and a string value.
          <div className="subsection">
            <div className="subsection-title">
              data-* attribute
            </div>
            <div className="subsection-content">
              It can be utilized to perform various actions to target a div, like embedding custom data. Click on an animal below to see its type.
              <ul>
                <li data-animal-type="mammal" onClick={showDetails}>Lion</li>
                <li data-animal-type="bird" onClick={showDetails}>Eagle</li>
                <li data-animal-type="fish" onClick={showDetails}>Shark</li>
                <li data-animal-type="reptile" onClick={showDetails}>Snake</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Semantics Section */}
      <Section title="Semantics">
        HTML semantics are tags which hold meaning and are used to define the structure of web pages. They provide information about the content they contain.
        <br /> This makes it easier for search engines and developers to understand the purpose of the content. The semantics are as follows:
          <ul>
            <li><b>article</b>	defines independent, self-contained content</li>
            <li><b>aside</b>	defines content aside from the page content</li>
            <li><b>details</b>	defines additional details that the user can view or hide</li>
            <li><b>figcaption</b>	defines a caption for a <b>figure</b> element</li>
            <li><b>figure</b>	specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.</li>
            <li><b>footer</b>	defines a footer for a document or section</li>
            <li><b>header</b>	specifies a header for a document or section</li>
            <li><b>main</b>	specifies the main content of a document</li>
            <li><b>mark</b>	defines marked/highlighted text</li>
            <li><b>nav</b>	defines navigation links</li>
            <li><b>section</b>	defines a section in a document</li>
            <li><b>summary</b>	defines a visible heading for a <b>details</b> element</li>
            <li><b>time</b>	defines a date/time</li>
          </ul>
        An example of using these elements is shown below:
        <br />
        {renderImage()}
      </Section>

      {/* Tab Index Section */}
      <Section title="Tab Index">
      The tabindex attribute specifies the tab order of an element when the "tab" button is used for navigating.
      <br />The tabindex attribute can be used on any HTML element. It is illustrated below:
      <br /><br />Click <b>Tab</b> to navigate through the elements below:
        <div className="tabIndex">
          <div tabindex="1">Tab Index 1</div>
          <div tabindex="3">Tab Index 3</div>
          <div tabindex="2">Tab Index 2</div>
        </div>
      </Section>
    </>
  );
};

export default HTML;