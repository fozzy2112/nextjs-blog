const { Octokit } = require("@octokit/rest")

export default async (req, res) => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN
	})

	const followers = await octokit.request("/users/fozzy2112/followers?per_page=100");
	const followersCount = followers.data.length;
	const stars = await octokit.request("/users/fozzy2112/repos");
	const starsCount = stars.data.filter(repo => !repo.fork).reduce((acc, item) => {
		return acc + item.stargazers_count;
	},0);
	
	const reposStarred = await octokit.request("/users/fozzy2112/starred");
	const starredCount = reposStarred.data.length;

	return res.status(200).json({ stars: starsCount, followers: followersCount, starred: starredCount });
}