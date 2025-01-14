import { combineResolvers } from 'graphql-resolvers';
import { addImpressions, addImpressionsURL, addInteraction, findImpressionsBySiteId, findImpressionsByURL, findImpressionsByURLAndDate, getEngagementRates} from '~/services/Impressions/impressions.service';

const resolvers = {
    Query: {
        getImpressionsByURL: combineResolvers(
            // isAuthenticated,
            (_, { url }, {user}) => findImpressionsByURL(user.id, url)
        ),
        getImpressionsBySiteId: combineResolvers(
            // isAuthenticated,
            (_, { siteId }) => findImpressionsBySiteId(siteId)
        ),
        getEngagementRates: combineResolvers(
            // isAuthenticated,
            (_, { url, startDate, endDate }, {user}) => getEngagementRates(user.id, url, startDate, endDate)
        ),
        getImpressionsByURLAndDate: combineResolvers(
            // isAuthenticated,
            (_, {  url, startDate, endDate }, {user}) => findImpressionsByURLAndDate(user.id, url, new Date(startDate), new Date(endDate))
        ),
        
    },
    Mutation: {
        addImpression: combineResolvers(
            (_, { siteId }, { ip }) => addImpressions(siteId, ip)
        ),
        addImpressionsURL: combineResolvers(
            (_, { url }, { ip }) => addImpressionsURL(url, ip)
        ),

        registerInteraction: combineResolvers(
            (_, { impressionId, interaction}, ) => addInteraction(impressionId, interaction)
        ),
    },
};

export default resolvers;
