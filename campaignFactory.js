import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryContractAddress = '0x20974Bef888fcfa03DC344D0979A3421b53ECc79';
const campaignFactoryContractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryContractAddress
);

export default campaignFactoryContractInstance;