import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

const LineDivider = ()=>{
    return(
        <View style={{width:1,paddingVertical:15,marginHorizontal: 5,}}>
            <View style={{flex:1,borderLeftColor: COLORS.lightGray,borderLeftWidth: 1,}}></View>
        </View>
    )
}

const ButtonSection = () => {
    return (
        <View style={{flex: 1,justifyContent: 'center',padding: SIZES.padding,}}>
            <View style={{flexDirection: 'row',height:70,backgroundColor: COLORS.secondary,borderRadius: SIZES.radius,}}>
                {/************* claim  **************/}
                <TouchableOpacity onPress={()=> console.log('claim')}
                    style={{marginHorizontal: 8,}}>
                    <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                        <Image source={icons.claim_icon} style={{width: 25,height:25}}/>
                        <Text style={{marginLeft: SIZES.base, ...FONTS.body4,color:COLORS.white}}>Claim</Text>
                    </View>
                </TouchableOpacity>
                {/************ divider ************/}
                <LineDivider/>
                {/*********** get points ***********/}
                <TouchableOpacity onPress={()=> console.log('points')}
                    style={{flex:1,}}>
                    <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                        <Image source={icons.point_icon} style={{width: 25,height:25}}/>
                        <Text style={{marginLeft: SIZES.base, ...FONTS.body4,color:COLORS.white}}>Get Points</Text>
                    </View>
                </TouchableOpacity>
                {/************ divider ************/}
                <LineDivider/>
                {/************* card *************/}
                <TouchableOpacity onPress={()=> console.log('My card')}
                    style={{flex:1}}>
                    <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                        <Image source={icons.card_icon} style={{width: 28,height:25}}/>
                        <Text style={{marginLeft: SIZES.base, ...FONTS.body4,color:COLORS.white}}>My card</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ButtonSection

const styles = StyleSheet.create({})
