export const constructRepoInfoApiUrl = (userName: string, repoName: string): string => {
  return `https://api.github.com/repos/${userName}/${repoName}`;
}
