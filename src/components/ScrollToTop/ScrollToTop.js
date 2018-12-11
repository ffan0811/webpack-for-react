import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// 이 컴포넌트는 잠시 보류

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
	    if (this.props.location !== prevProps.location) {
	      window.scrollTo(0, 0);
	    }
	}

	render() {
	    return this.props.children;
	}
}

export default withRouter(ScrollToTop);
