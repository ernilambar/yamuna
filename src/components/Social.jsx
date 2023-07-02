import React from 'react';
import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa';
import './Social.scss';

const Social = () => {
	return (
		<div className="social-links">
			<ul>
				<li>
					<a href="https://www.facebook.com/acharya.yamuna">
						<FaFacebook />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/yamuna811">
						<FaTwitter />
					</a>
				</li>
				<li>
					<a href="https://www.tiktok.com/@yamuna131">
						<FaTiktok />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Social;
