import React from 'react';
import RenderNav from '../../components/nav/RenderNav';
import { VscArrowSwap } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlinePrinter, AiOutlineShareAlt } from 'react-icons/ai';

const PropertyDetails = () => {
    return (
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <main>
                    <section className={'pt40 pb40 flex justifyBetween alignCenter pl70 pr70'}>
                        <div className={'pl50'}>
                            <p className={'f32 headerColor boldText pb10'}>Skyper Pool Apartment</p>
                            <p className={'f14 headerColor regularText'}>318 E 84th St, New York</p>
                        </div>
                        <div className={'pr50 flex alignCenter'}>
                            <div>
                                <ul className={'tableCells'}>
                                    <li>
                                        <VscArrowSwap />
                                    </li>
                                    <li>
                                        <AiOutlineHeart />
                                    </li>
                                    <li>
                                        <AiOutlineShareAlt />
                                    </li>
                                    <li>
                                        <AiOutlinePrinter />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className={'f32 headerColor boldText '}>$1200<span className={'f20 headerColor regularText '}>/mo</span></p>
                            </div>
                        </div>
                    </section>
                </main>
            </RenderNav>
        </>
    )
}

export default PropertyDetails