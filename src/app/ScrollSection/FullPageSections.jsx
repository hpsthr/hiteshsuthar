/**
 * @class FullPageSections
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FullpageContext from './FullpageContext';

class FullPageSections extends PureComponent {
  static contextType = FullpageContext;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
  };

  static defaultProps = {
    className: '',
    style: {
      display: 'flex',
      flexDirection:"row",
      position: 'absolute',
      left: 0,
      right: 0,
    },
  };


  render() {
    const {
      children,
      style,
      className,
    } = this.props;
    return (
      <FullpageContext.Consumer>
        {
          ctx => (
            <div
              name="Warper"
              style={ctx.style} // from
              ref={this.warperRef}
            >

              <div
                name="Inner"
                className={className}
                id = {"inner-dom"}
                style={{
                  display: 'flex',flexDirection:"row",
                  transition: `transform 500ms ease`,
                  ...style,
                  transform: `translate(${(ctx.translateX)}px, 0)`,
                }}
                ref={ctx.fullpageRef}
              >
                { children }
              </div>
            </div>
          )
        }
      </FullpageContext.Consumer>
    );
  }
}

export default FullPageSections;
