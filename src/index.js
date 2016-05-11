/**
 * Created by vrlc92 on 5/4/16.
 */

var Account = require('./account.js');
var Loader = require('./loader.js');
var Transaction = require('./transaction.js');
var Peer = require('./peer.js');
var Block = require('./block.js');
var Signature = require('./signature.js');
var Delegate = require('./delegate.js');
var Dapp = require('./dapp.js');
var MultiSignature = require('./multi_signature.js');

module.exports = {
    // Account
    openAccount: Account.openAccount,
    getBalance: Account.getBalance,
    getPublicKey: Account.getPublicKey,
    generatePublicKey: Account.generatePublicKey,
    getAccount: Account.getAccount,
    getVotes: Account.getVotes,
    vote: Account.vote,

    //Loader
    getLoadingStatus: Loader.getLoadingStatus,
    getSynchronisationStatus: Loader.getSynchronisationStatus,

    //Transaction
    getTransactionsList: Transaction.getTransactionsList,
    getTransaction: Transaction.getTransaction,
    sendTransaction: Transaction.sendTransaction,
    getUnconfirmedTransaction: Transaction.getUnconfirmedTransaction,
    getUnconfirmedTransactions: Transaction.getUnconfirmedTransactions,

    //Peer
    getPeersList: Peer.getPeersList,
    getPeer: Peer.getPeer,
    getPeerVersion: Peer.getPeerVersion,

    //Block
    getBlock: Block.getBlock,
    getBlocks: Block.getBlocks,
    getBlockchainFeePercent: Block.getBlockchainFeePercent,
    getBlockchainHeight: Block.getBlockchainHeight,
    getForgedByAccount: Block.getForgedByAccount,

    //Signature
    addSecondSignature: Signature.addSecondSignature,

    //Delegate
    enableDelegateOnAccount: Delegate.enableDelegateOnAccount,
    getDelegates: Delegate.getDelegates,
    getDelegate: Delegate.getDelegate,
    getVoters: Delegate.getVoters,
    enableForging: Delegate.enableForging,
    disableForging: Delegate.disableForging,

    //Dapp
    registerDapp: Dapp.registerDapp,
    getDapps: Dapp.getDapps,
    getDaap: Dapp.getDaap,
    searchDappStore: Dapp.searchDappStore,
    installDapp: Dapp.installDapp,
    installedDapps: Dapp.installedDapps,
    installedDappsIds: Dapp.installedDappsIds,
    uninstallDapp: Dapp.uninstallDapp,
    launchDapp: Dapp.launchDapp,
    installing: Dapp.installing,
    launched: Dapp.launched,
    categories: Dapp.categories,
    stopDapp: Dapp.stopDapp,

    //MultiSignature
    getPendingMultiSignatureTransactions: MultiSignature.getPendingMultiSignatureTransactions,
    createMultiSignatureAccount: MultiSignature.createMultiSignatureAccount,
    signTransaction: MultiSignature.signTransaction,
    getAccountsOfMultisignature: MultiSignature.getAccountsOfMultisignature
};
