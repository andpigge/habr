import classNames from 'classnames/bind';
import React from 'react';

import styles from './search.module.css';

const cx = classNames.bind(styles);

export const Search = () => {
	return (
		<div className={styles.search}>
			<input 
				type="text"
				placeholder='Введите запрос...'
				className={styles.inpyt}
			/>
			<ul className={styles.list}>
				<p className={styles.title}>
					По запросу Css Grid найдено:
				</p>
				<li className={styles.item}>
					<span className={styles.line}></span>
					<p className={styles.text}>
						Jordan Belfort
					</p>
					<span className={cx('dash', 'light')}>
						&#8212;
					</span>
					<p className={cx('text', 'light')}>
						Web3 Dev
					</p>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>
						Jordan Belfort
					</p>
					<span className={cx('dash', 'light')}>
						&#8212;
					</span>
					<p className={cx('text', 'light')}>
						Web3 Dev
					</p>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>
						Jordan Belfort
					</p>
					<span className={cx('dash', 'light')}>
							&#8212;
					</span>
					<p className={cx('text', 'light')}>
						Web3 Dev
					</p>
				</li>
			</ul>
		</div>
	)
}
