import React, {Component} from 'react';
import css, {cmp_drawer} from './styles.css';
import {withDataProvider, withSettingProvider} from 'oc-template-react-compiler/utils';

class Drawer extends Component {
  constructor (props) {
    super();

    this.state = {
      title: props.title,
      visible: props.visible
    };
  }

  componentDidMount () {
  }

  toggleVisibility (e) {
    e.preventDefault();
    let isVisible = (this.state.visible)? false : true;

    this.props.getData({visible: isVisible}, (err, data) => {
      if (err) throw err;
      this.setState({visible: data.visible});
    });

    return false;
  }

  render () {
    const { title } = this.state;
    const visible = (this.state.visible) ? 'is-visible' : 'is-hidden';

    return (
      <section>
        <div className={`${css['cmp_drawer']}`} data-visible={visible}>
          <h4 className={`${css['cmp_heading']}`}>
            <a className={css['cmp_drawer__link']} href='#' onClick={this.toggleVisibility.bind(this)}>{title}</a>
          </h4>

          <div className={css['cmp_drawer__content']}>
            <p>Eu tempor dolore adipisicing minim excepteur enim adipisicing eiusmod sunt voluptate irure enim non.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default withSettingProvider(withDataProvider(Drawer));
