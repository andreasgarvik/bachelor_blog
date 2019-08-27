import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomeScreen from './components/ui/HomeScreen'
import BlogPostDetails from './components/blog/BlogPostDetails'
import BlogPostArchive from './components/blog/BlogPostArchive'
import SignIn from './components/auth/SignIn'
import CreateBlogPost from './components/blog/CreateBlogPost'
import EditBlogPost from './components/blog/EditBlogPost'
import Footer from './components/ui/Footer'
import ScrollToTop from './utils/ScrollToTop'

class App extends React.Component {
	state = { nightMode: false }

	toggleNightMode = () => {
		this.state.nightMode
			? this.setState({ nightMode: false })
			: this.setState({ nightMode: true })
	}

	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<div className='App Site'>
						<div className='Site-content'>
							<div className='main'>
								<Switch>
									<Route exact path='/' component={HomeScreen} />
									<Route path='/blogposts/:id' component={BlogPostDetails} />
									<Route path='/blogposts' component={BlogPostArchive} />
									<Route path='/signin' component={SignIn} />
									<Route path='/create' component={CreateBlogPost} />
									<Route path='/edit/:id' component={EditBlogPost} />
									<Redirect to='/' />
								</Switch>
							</div>
						</div>
						<Footer toggleNightMode={this.toggleNightMode} />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		)
	}
}

export default App
