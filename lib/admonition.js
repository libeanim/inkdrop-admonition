'use babel';

import remarkCustomBlocks from 'remark-custom-blocks';
import admonitionConfig from './admonition-config';
import { markdownRenderer } from 'inkdrop';

class Admonition {

  constructor() {
    this.plugin = [remarkCustomBlocks, admonitionConfig];
  }

  addAdmontioin(type, title) {
    return () => {
      const { cm } = inkdrop.getActiveEditor();
      if (cm.somethingSelected()) {
        const selection = cm.getSelection();
        cm.replaceSelection(`[[${type} | ${title}]]\n| ` + selection.replace(/\n/g, '\n| '), 'around');
      } else {
        const { line } = cm.getCursor();
        cm.replaceSelection(`[[${type} | ${title}]]\n| `, 'start');
        cm.setCursor({line: line + 1, ch: 2});
      }
    };
  }

  subsribe() {
    this.subscription = inkdrop.commands.add(document.body, {
      'admonition:add-note': this.addAdmontioin('note', 'Note'),
      'admonition:add-success': this.addAdmontioin('success', 'Success'),
      'admonition:add-fail': this.addAdmontioin('fail', 'Failure')
    });
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.dispose();
    }
  }

}

const admonition = new Admonition();

module.exports = {

  activate() {

    admonition.subsribe();
    if (markdownRenderer) {
      return markdownRenderer.remarkPlugins.push(admonition.plugin);
    }
  },

  deactivate() {

    admonition.unsubscribe();
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
        return plugin !== admonition.plugin;
      });
    }
  }

};
