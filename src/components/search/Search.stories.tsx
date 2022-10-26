import { Search } from './Search';
import './search.module.css';

export default {
	type: 'UI/Search',
	component: Search
}

export const Default = () => <Search></Search>
