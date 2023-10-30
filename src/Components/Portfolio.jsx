/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ai.jpg";

const imageAltText = "Artificial Intelligence";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Future Of AI 🎉",
    description:
      "AI is truly a revolutionary feat of computer science, set to become a core component of all modern software over the coming years and decades.",
    url: "https://www.cigionline.org/articles/cyber-security-battlefield/?utm_source=google_ads&utm_medium=grant&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0CzqGHvxY93NCdG4JjSFJuQXGmmXo2HCW1EHDqFyz4kV9utS10JDHZdYaAvPUEALw_wcB",
  },
  {
    title: "About Data Analytics",
    description:
      "Experts at the American Institutes for Research",
    url: "https://www.air.org/our-capabilities?gclid=Cj0KCQjwqP2pBhDMARIsAJQ0CzoSjez6A9d4jvnNXpGOYPIZOHbpld4HWPjJ6wHw7bSkPK4vkUeCBWcaAnoGEALw_wcB",
  },
  {
    title: "AI in Healthcare: The Gift of Time and Peace of Mind",
    description:
      "Can an artificial intelligence chatbot assistant, provide responses to patient questions that are of comparable quality and empathy to those written by physicians?",
    url: "https://pubsonline.informs.org/magazine/analytics?utm_term=data%20analysis%20report&utm_campaign=Analytics+magazine&utm_source=adwords&utm_medium=ppc&hsa_tgt=kwd-588184562&hsa_grp=130118060346&hsa_src=g&hsa_net=adwords&hsa_mt=b&hsa_ver=3&hsa_ad=566414032502&hsa_acc=6773547382&hsa_kw=data%20analysis%20report&hsa_cam=15456064506&gad=1&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czqthv09kS5e-Z77G5jWsgWFrR6qUXLz7m64zSEaHQGabAZWAbBuqNIaAmOiEALw_wcB",
  },
  {
    title: "Analyze Your Data",
    description:
      "An Introduction to Qualitative Research.",
    url: "https://istss.org/education-research/istss-research-guidelines/trauma-research-methods/an-introduction-to-qualitative-research-methods-fo?gclid=Cj0KCQjwqP2pBhDMARIsAJQ0CzqLard9LMoPTmiF_Yi7wHrDYAk_zRG7O6uaRGPZDNXoE0wyW1ONqiUaAjLEEALw_wcB",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
