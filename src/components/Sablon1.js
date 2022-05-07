import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

function Sablon1({ data }) {

    const colors = {
        primary: '#2980b9',
        white: '#ecf0f1',
        dark: '#555555',
    }

    Font.register({
        family: "",
        src: "/assets/fonts/Quicksand-Regular.ttf"
    });

    Font.register({
        family: 'Quicksand', fonts: [
            { src: '/assets/fonts/Quicksand-Regular.ttf' },
            { src: '/assets/fonts/Quicksand-Light.ttf', fontWeight: 300 },
            { src: '/assets/fonts/Quicksand-Bold.ttf', fontWeight: 600 },
        ]
    });


    const styles = StyleSheet.create({

        page: {
            flexDirection: 'row',
            backgroundColor: colors.white,
            fontFamily: 'Quicksand',
        },
        leftSection: {
            paddingHorizontal: 10,
            paddingTop: 40,
            width: '40vw',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: colors.primary,
        },
        rightSection: {
            paddingTop: 50,
            paddingHorizontal: 10,
            backgroundColor: colors.white,
        },
        profileImgBox: {
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: 'hidden',
        },
        profileImg: {
            width: 100,
            height: 'auto',
        },
        nameTitle: {
            marginTop: 5,
            color: colors.white,
            fontWeight: 600,
            fontSize: 24,
            marginBottom: 25,
            textAlign: 'center',
        },
        contentTitle: {
            color: colors.white,
            borderLeft: 2,
            borderStyle: 'solid',
            borderColor: colors.white,
            paddingLeft: 5,
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 5,
        },
        contentTitleColored: {
            color: colors.primary,
            borderLeft: 2,
            borderStyle: 'solid',
            borderColor: colors.primary,
            paddingLeft: 5,
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 5,
        },
        contentBox: {
            padding: 5,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            marginBottom: 25,
        },
        contentItem: {
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
        },
        whiteText: {
            color: colors.white,
            maxWidth: '80%',
            fontSize: 12,
        },
        primaryText: {
            color: colors.primary,
            fontSize: 14,
        },
        darkText: {
            color: colors.dark,
            fontSize: 14,
        },
        icon: {
            width: 18,
            height: 18,
            marginHorizontal: 5,
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    <View style={styles.profileImgBox}>
                        <Image style={styles.profileImg} source='/assets/1.png' />
                    </View>
                    <Text style={styles.nameTitle}>{data?.contact?.firstName + ' ' + data?.contact?.lastName}</Text>
                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitle}>İletişim Bilgilerim</Text>

                        <View style={styles.contentItem}>
                            <Image style={styles.icon} source='/assets/icons/phone.png' />
                            <Text style={styles.whiteText}>{data?.contact?.phone}</Text>
                        </View>

                        <View style={styles.contentItem}>
                            <Image style={styles.icon} source='/assets/icons/mail.png' />
                            <Text style={styles.whiteText}>{data?.contact?.mail}</Text>
                        </View>

                        <View style={styles.contentItem}>
                            <Image style={styles.icon} source='/assets/icons/address.png' />
                            <Text style={styles.whiteText}>{data?.contact?.address}</Text>
                        </View>

                    </View>

                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitle}>Sosyal Medya Hesaplarım</Text>

                        {
                            data?.socialMedia?.facebook ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/facebook.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.facebook}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.instagram ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/instagram.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.instagram}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.twitter ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/twitter.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.twitter}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.linkedin ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/linkedin.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.linkedin}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.github ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/github.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.github}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.behance ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/behance.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.behance}</Text>
                                </View> : null
                        }

                        {
                            data?.socialMedia?.dribbble ?
                                <View style={styles.contentItem}>
                                    <Image style={styles.icon} source='/assets/icons/dribbble.png' />
                                    <Text style={styles.whiteText}>{data?.socialMedia?.dribbble}</Text>
                                </View> : null
                        }

                    </View>

                </View>
                {/* end Left Section */}

                {/* Right Section */}
                <View style={styles.rightSection}>
                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitleColored}>Eğitim Bilgilerim</Text>

                        {
                            data?.education.map((val, i) =>
                                <View key={i} style={{ flexDirection: 'column', marginBottom: '10px', marginLeft: '10px' }}>
                                    <Text style={{ color: colors.dark, fontWeight: 600, fontSize: '12px' }}>{val?.schoolName}</Text>
                                    <View style={{ flexDirection: 'column', marginLeft: '5px' }}>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.inDate + ' - ' + val?.outDate}</Text>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.department}</Text>
                                    </View>
                                </View>
                            )
                        }

                    </View>

                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitleColored}>Deneyimlerim</Text>

                        {
                            data?.experience.map((val, i) =>
                                <View key={i} style={{ flexDirection: 'column', marginBottom: '10px', marginLeft: '10px' }}>
                                    <Text style={{ color: colors.dark, fontWeight: 600, fontSize: '12px' }}>{val?.corporationName}</Text>
                                    <View style={{ flexDirection: 'column', marginLeft: '5px' }}>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.inDate + ' - ' + val?.outDate}</Text>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.job}</Text>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>" {val?.description} "</Text>
                                    </View>
                                </View>
                            )
                        }

                    </View>

                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitleColored}>Dil Bilgilerim</Text>

                        {
                            data?.languages.map((val, i) =>
                                <View key={i} style={{ flexDirection: 'column', marginBottom: '10px', marginLeft: '10px' }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ color: colors.dark, fontWeight: 600, fontSize: '12px', marginRight: '5px' }}>{val?.title}</Text>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.level}</Text>
                                    </View>
                                    <Text style={{ color: colors.dark, fontSize: '12px', marginLeft: '5px' }}>{val?.certifica}</Text>
                                </View>
                            )
                        }

                    </View>

                    <View style={styles.contentBox}>

                        <Text style={styles.contentTitleColored}>Referanslarım</Text>

                        {
                            data?.referances.map((val, i) =>
                                <View key={i} style={{ flexDirection: 'column', marginBottom: '10px', marginLeft: '10px' }}>
                                    <Text style={{ color: colors.dark, fontWeight: 600, fontSize: '12px', marginRight: '5px' }}>{val?.fullName}</Text>
                                    <View style={{ flexDirection: 'row', marginLeft: '5px' }}>
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.job}</Text>
                                        {val?.job && val?.corporateName && <Text style={{ color: colors.dark, fontSize: '12px', marginHorizontal: '5px' }}>|</Text>}
                                        <Text style={{ color: colors.dark, fontSize: '12px' }}>{val?.corporateName}</Text>
                                    </View>
                                    <Text style={{ color: colors.dark, fontSize: '12px', marginLeft: '5px' }}>{val?.phone}</Text>
                                </View>
                            )
                        }

                    </View>

                </View>
                {/* end Right Section */}
            </Page>
        </Document >
    )
};

export default Sablon1;
