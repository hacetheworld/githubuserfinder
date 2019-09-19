class Github {

    constructor() {
        this.client_id = '81f05ab7fb47375e8273';
        this.client_secret = '264d3b1ea57df56635f5671f6d7b45fa68a0c069';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}