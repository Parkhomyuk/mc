import {ArticleInterface} from 'src/app/shared/types/articles.interface';

export interface GetFeedResponseInterface {
    articles: ArticleInterface[],
    articlesCount: number
}