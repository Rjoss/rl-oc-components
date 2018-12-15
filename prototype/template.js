import React, {Component} from 'react';
import css, {cmp_drawer} from './styles.css';
import {withDataProvider, withSettingProvider} from 'oc-template-react-compiler/utils';

class Drawer extends Component {
  constructor (props) {
    super();

    let queryData = (props.data) ? Object.assign({}, JSON.parse(decodeURIComponent(props.data))) : {};

    this.state = {
      name: props.name,
      visible: props.visible,
      data: queryData,
      local: props.local
    };

    // console.log(queryData);
    console.log('constructor!');
  }

  componentDidMount () {
    // get the props, change them, and set the state
    // this.props.getData({ name: 'Pippo' }, (err, data) => {
    //   if (err) throw err;
    //   this.setState({ name: data.name });
    // });

    // Don't do this if you don't want to be fired
    oc.events.on('oc:componentDidMount', (ev, props) => {
      console.group('OC Component Mounted');
      console.log('current state');
      console.log(this.state);
      console.groupEnd();
    });
  }

  toggleVisibility (e) {
    e.preventDefault();
    console.log('toggleVisibility...');
    let isVisible = (this.state.visible)? false : true;

    // native react way
    // this.setState((state, props) => ({
    //   visible: isVisible
    // }));

    this.props.getData({visible: isVisible}, (err, data) => {
      if (err) throw err;
      this.setState({visible: data.visible});
    });

    return false;
  }

  render () {
    console.log('render!');
    const { getSetting } = this.props;
    const { name } = this.state;
    const visible = (this.state.visible) ? 'is-visible' : 'is-hidden';

    return (
      <section>
        <div className={`${css['cmp_drawer']}`} data-visible={visible}>
          <h4 className={`${css['cmp_heading']}`}>
            <a className={css['cmp_drawer__link']} href='#' onClick={this.toggleVisibility.bind(this)}>{this.state.name}</a>
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
