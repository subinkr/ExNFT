import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { expect } from 'chai';

describe("LectureNFT", function() {
    let owner: Signer;
    before(async () => {
        [owner] = await ethers.getSigners();
    });

    it("should have 10 nfts", async() => {
        const LectureNFT = await ethers.getContractFactory('LectureNFT');
        const contract = await LectureNFT.deploy(); // LectureNFT 생성자에 파라미터가 없기에 deploy시에도 없음

        await contract.deployed(); // 컨트랙트 배포까지 대기

        expect(await contract.balanceOf(await owner.getAddress())).to.be.equal(10);
    });
});