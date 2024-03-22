/**
 * @class Fullpage
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FullpageContext from './FullpageContext';
import ContextProp from "./ContextProp"
import Aux from "./Auxillary"



class Fullpage extends PureComponent {
    static contextType = ContextProp
  static contextType = FullpageContext;


  static propTypes = {
    children: PropTypes.node.isRequired,
    transitionTiming: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
    className: PropTypes.string,
    onChange: PropTypes.func,
    keyboardShortcut: PropTypes.bool,
    offScroll:PropTypes.bool
  };

  static defaultProps = {
    transitionTiming: 500,
    style: {
      position: 'fixed',
      top: 0,
      left: -1,
      right: 0,
    },
    className: '',
    onChange: null,
    keyboardShortcut: true,
  };

  constructor(props) {
    super(props);
    this.slides = [];
    this.state = {
      slide: null,
     temSlide:null,
      translateX: 0,
      pageXOffset: 0,
      offsetWidth: 0,
      count: 0,
      slides:null,
      number: 0,
      resetScroll: false,
      clientWidth:0,
      onHover:null,
      
    };
    this.setState = this.setState.bind(this);
    this.ticking = false;
    this.newSlide = null;
    this.viewportWidth = 0;
    this.scrollNow = false
    this.throttle = 600;
    this.time = -1;

    this.startX =0;

  
    
    
    // binds
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.update = this.update.bind(this);
    this.getIndex = this.getIndex.bind(this);
    // handle
    this.handleScroll = this.handleScroll.bind(this);
    this.touchEnd = this.touchEnd.bind(this)
    this.touchStart = this.touchStart.bind(this)
    this.handleResize = this.handleResize.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    // refs
    this.driverRef = React.createRef();
    this.warperRef = React.createRef();
    this.fullpageRef = React.createRef();
  }


 


  componentDidMount() {
    
    
      
    this.windowClientWidth = document.documentElement.clientWidth;
    this.driverRef.current.style.width = `${this.state.clientWidth}px`;
    
    this.handleResize();
    this.setState({
      slide: this.slides[0],
    });

   

    if(!this.props.offScroll){

    if (typeof window !== 'undefined') {
      window.addEventListener('mousewheel',this.handleScroll);
      window.addEventListener('DomMouseScroll',this.handleScroll)
      window.addEventListener('wheel',this.handleScroll)
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('touchstart' , this.touchStart, false )
      window.addEventListener('touchmove' , (e) => {e.preventDefault()})
      window.addEventListener('touchend' , this.touchEnd , false)
      }

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', this.handleKeys);
    }}
  }

  

  componentWillUnmount() {
    
    
    
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousewheel',this.handleScroll);
      // window.removeEventListener('mousewheel', this.handleScroll);
      
      window.addEventListener('resize', this.handleResize);
      
    }
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeys);
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    window.addEventListener('mousewheel',this.handleScroll);
      window.addEventListener('wheel',this.handleScroll)
      window.addEventListener('touchmove' , (e) => {e.preventDefault()})
      window.addEventListener('touchstart' , this.touchStart  )
      window.addEventListener('touchend' , this.touchEnd  )
    // window.addEventListener('scroll', this.handleScroll);
    
    this.viewportWidth = Math.max(this.windowClientWidth, this.slides.length * this.windowClientWidth || 0,
    );
    
  // console.log()   

  this.windowClientWidth = document.documentElement.clientWidth;
      
  this.setState({
      clientWidth:this.fullpageRef.current.clientWidth
    }) 
    this.driverRef.current.style.width = `${this.state.clientWidth}px`;
    
  
    
    

    
  }

  getIndex(slide) {
   
    return this.slides.indexOf(slide);
  }

  subscribe(slide) {
    // add new slide (push)
    this.newSlides = [...this.slides, slide];

    
    // sort slide for top to bottom
    this.slides = this.newSlides.sort((a, b) => {
      const aTop = a.el.current.offsetLeft;
      const bTop = b.el.current.offsetLeft;
      return aTop - bTop;
    });
    this.setState({
      count: this.slides.length,
      
    });
    this.ticking = false;
    this.handleResize();
    return slide;
  }

  unsubscribe(slide) {
    this.slides = this.slides.filter(s => s.el !== slide.el);
    this.setState({
      count: this.slides.length,
    });
    this.handleResize();
    
    return slide;
  }

 
 

touchStart(e) {
  const touchobj = e.changedTouches[0]
  this.startX = touchobj.pageX
  e.preventDefault()
}

touchEnd(e) {
  // if (this.props === undefined) return null;
  this.transitionTiming = this.props.transitionTiming
  const touchobj = e.changedTouches[0]
  const distX = touchobj.pageX - this.startX
  
  const now = new Date() 
  if (this.time !== -1 && now - this.time < this.throttle) return; 
    this.time = now;

    let dX = distX
    
    if(!this.context.backDrop){
      
      
            if(dX >= 25){
              
            return this.back()
            }
            if(dX <= -25){
              
             return this.next()
            }} 
      
            
 

   

}

  handleScroll(e) {
    
    let dX = e.deltaY
    this.transitionTiming = this.props.transitionTiming
    const now = Date.now();
 
    if (this.time !== -1 && now - this.time < this.throttle) return; 
    this.time = now;


    

    if(!this.context.backDrop){
      
      // if(!this.ticking) return;
            if(dX >= 25){
              dX = 25
            return this.next()
            }
            if(dX <= -25){
              dX = 25
             return this.back()
            }}
            
          
         
    //   if(fancyScroll === this.newSlide){
    //     newSlide = fancyScroll
    //     }

    //     if(fancyScroll !== this.newSlide){
    //       newSlide = this.slides.find((slide) => {
    //         return pageXOffset < slide.el.current.offsetTop + (slide.el.current.offsetWidth * 0.5)  ;
    //          })
    //     }
    // this.transitionTiming = this.props.transitionTiming
    // if(!this.context.backDrop){
    
    // if (this.lockScroll) {
    //   // if > top and bottom < fix scroll
    //   window.scrollTo(0, translateX * -1 );
      
    //   return false;
    // }
    // if (!this.ticking) {
    //   window.requestAnimationFrame(() => {
        
    //     this.goto(newSlide)
    //     if (resetScroll) {window.scrollTo(0, translateX * -1 );}
    //     this.setState({pageXOffset,resetScroll: false,});
        
    //     this.ticking = false;
    //   });
    //   }
    this.ticking = true;
    
    return true; 

    
    
  }

 
  handleResize() {
    // 
    
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        // update count
        
        this.ticking = false;
        this.setState({translateX:this.viewportWidth * - this.state.number})
        this.transitionTiming = 0
      });
    }
    
    this.ticking = true;
  }

  handleKeys(event) {
    const {
      keyboardShortcut,
    } = this.props;
    this.transitionTiming = this.props.transitionTiming
    if (!keyboardShortcut) {
      return true;
    }

    if (
      event.keyCode === 33 // pageUp:    33,
      || event.keyCode === 37 // left:      37,
      || event.keyCode === 38 // up:        38,
    ) {
      event.preventDefault();
      return (event.shiftKey) ? this.first(event) : this.back(event);
    }
    if (
      event.keyCode === 34 // pageDown:  34,
      || event.keyCode === 39 // right:     39,
      || event.keyCode === 40 // down:      40,
    ) {
      event.preventDefault();
      return (event.shiftKey) ? this.last(event) : this.next(event);
    }
    if (
      event.keyCode === 35 // end:       35,
    ) {
      event.preventDefault();
      return this.last(event);
    }
    if (
      event.keyCode === 36 // home:      36,
    ) {
      event.preventDefault();
      return this.first(event);
    }

    return true;
  }

  // TODO: add update methode
  update() {
    return this;
  }
  updateHover(num) {
    this.setState({onHover:num})
    // console.log(num);
  }

  offUpdateHover(){
    this.setState({onHover:null})
  }



  goto(newSlides, resetScroll = false) {

    
let newSlide = newSlides


    if(newSlide === undefined){
      return ;
    } 
    const {slide} = this.state;
    
    const {transitionTiming, onChange} = this.props;
    
    if (slide !== newSlide) {
      const translateX = Math.max(
        (this.state.clientWidth - this.viewportWidth) * 1,
        newSlide.el.current.offsetLeft * -1,
      );
      
      const {
        onHide,
      } = slide.props;

      if (onHide && typeof onHide === 'function') {
        setTimeout(() => onHide(translateX), transitionTiming);
      }

      this.lockScroll = true;

      this.setState({
        slide: newSlide,
        number: this.getIndex(newSlide),
        translateX,
        offsetWidth: newSlide.el.current.offsetWidth,
        resetScroll,
      });
      

      

      // console.log(this.getIndex(newSlide))
      setTimeout(() => {
        this.lockScroll = false;
      }, 500);
      const {
        onShow,
      } = newSlide.props;
      if (onShow && typeof onShow === 'function') {
        onShow(translateX);
      }
      // call back function
      if (typeof onChange === "function") {
        onChange(this.state);
      }
    }
    this.newSlide = newSlide
    return newSlide;
    
  }

  gotoSlide(num){
    
    
    const index = Math.max(0, num)
    this.goto(this.slides[index], true);
  }

  back() {
    this.transitionTiming = this.props.transitionTiming
    const {
      number,
    } = this.state;
    const index = Math.max(0, number - 1);
    this.goto(this.slides[index], true);
  }

  next() {
    const {length} = this.slides;
    this.transitionTiming = this.props.transitionTiming
    
    const {number} = this.state;
    
    const index = Math.min(length - 1, number + 1);
    
    this.goto(this.slides[index], true);
  }

  first() {
    this.goto(this.slides[0], true);
  }

  last() {
    this.goto(this.slides[this.slides.length - 1], true);
  }

  render() {
    
    const {
      children,
      style,
      className,
      
    } = this.props;
// console.log("at RENDER");
    const {
      translateX,
      pageXOffset,
      offsetWidth,
      number,
      count,
      onHover,

    } = this.state;

    return (
      <Aux>
      <ContextProp.Provider value = {{number}}>
      </ContextProp.Provider>
      <FullpageContext.Provider
        value={{
          translateX,
          pageXOffset,
          offsetWidth,
          number,
          count,
          onHover,
          gotoSlide:this.gotoSlide,
          state:this.updateHover.bind(this),
          stateOff:this.offUpdateHover.bind(this),
          subscribe: this.subscribe,
          unsubscribe: this.unsubscribe,
          update: this.update,
          goto: slide => this.goto(slide),
          back: this.back,
          next: this.next,
          getIndex: this.getIndex,
          transitionTiming:this.transitionTiming,
          className,
          style,
          warperRef: this.warperRef,
          fullpageRef: this.fullpageRef,
          slides: this.slides,
          scrollHandle : this.handleScroll,
          
        }}
      >
        <div
          name="Driver"
          id={'doc-ment'}
          style={{
            position: 'relative',
            
          }}
          ref={this.driverRef}
          
        >

        {children}
        </div>
      </FullpageContext.Provider>
      </Aux>
      
    );
  }
}

export default Fullpage;
