import styles from './css/styles.css';

export default ({baseUrl, drawers, staticPath}) => {
  let nestedComponents = '';

  Object.entries(drawers).forEach(entry => {
    nestedComponents += `<oc-component href="${baseUrl}drawer/1.0.0?title=${entry[1].title}&visible=${entry[1].visible}"></oc-component>`;
  });

  return `
    <div class=${styles.nav} style="background-image:url(${staticPath}img/logo.png);">
      ${nestedComponents}
    </div>
  `;
};
