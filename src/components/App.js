import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, InputAdornment, TextField, Typography, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import Sablon1 from "./Sablon1";
import { PDFViewer } from "@react-pdf/renderer";
import moment from 'moment';

function App() {

  const [expanded, setExpanded] = useState('iletisim');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addEducation = () => {
    data.education.push(
      {
        schoolName: '',
        department: '',
        inDate: '',
        outDate: '',
      },
    )
    setData({ ...data })
  };

  const addExperience = () => {
    data.experience.push(
      {
        corporationName: '',
        job: '',
        description: '',
        inDate: '',
        outDate: '',
      },
    )
    setData({ ...data })
  };

  const [data, setData] = useState(
    {
      contact: {
        firstName: 'Mustafa',
        lastName: 'Cavlak',
        mail: 'muscavlak@gmail.com',
        phone: '539 551 25 21',
        address: 'Merkezefendi/Denizli',
      },
      education: [
        {
          schoolName: 'Pamukkale Üniversitesi',
          department: 'Yönetim Bilişim Sistemleri',
          inDate: '2016',
          outDate: '',
        },
      ],
      experience: [
        {
          corporationName: 'Aselsis End. Elk. A.Ş.',
          job: 'FrontEnd Developer',
          description: 'React Developer',
          inDate: '2020',
          outDate: '',
        },
      ],
      referances: [
        {
          fullName: 'Hakan ACAR',
          job: 'FrontEnd & Mobile Developer',
          corporateName: 'Aselsis',
          phone: '0555 555 55 55',
        },
      ],
      languages: [
        {
          title: 'İngilizce',
          level: 'B1',
          certifica: '',
        },
      ],
      socialMedia: {
        facebook: '',
        instagram: 'mustafacavlak1',
        twitter: '',
        linkedin: '',
        github: 'mcavlak2',
        behance: '',
        dribbble: '',
      },
    }
  );

  console.log(data)

  return (
    <Grid container>
      {/* Left Content */}
      <Grid sx={{ height: '100vh', overflow: 'auto' }} item xs={12} sm={6} md={6}>
        <Box sx={{ p: 2 }}>
          <Box>
            <Typography variant="h4">CvMatic</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* İLETİŞİM BİLGİLERİ */}
          <Accordion expanded={expanded === 'iletisim'} onChange={handleChange('iletisim')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="overline" >
                İLETİŞİM BİLGİLERİ
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      value={data?.contact?.firstName}
                      onChange={(e) => {
                        data.contact.firstName = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Soyadınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      value={data?.contact?.lastName}
                      onChange={(e) => {
                        data.contact.lastName = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Mail Adresiniz"
                      variant="standard"
                      fullWidth
                      type='email'
                      size='small'
                      value={data?.contact?.mail}
                      onChange={(e) => {
                        data.contact.mail = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Telefon Numaranız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      value={data?.contact?.phone}
                      onChange={(e) => {
                        data.contact.phone = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Adresiniz"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      value={data?.contact?.address}
                      onChange={(e) => {
                        data.contact.address = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* EĞİTİM BİLGİLERİ */}
          <Accordion expanded={expanded === 'egitim'} onChange={handleChange('egitim')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="overline" >
                  EĞİTİM BİLGİLERİ
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>

              {
                data?.education.map((val, i) =>
                  <Box key={i} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Kurum Adı"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.schoolName}
                          onChange={(e) => {
                            data.education[i].schoolName = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Bölüm / Alan / Dal"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.department}
                          onChange={(e) => {
                            data.education[i].department = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Giriş Tarihi"
                          variant="standard"
                          fullWidth
                          type='date'
                          size='small'
                          value={val?.inDate}
                          onChange={(e) => {
                            data.education[i].inDate = moment(e.target.value).format('DD/MM/yyyy')
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Mezuniyet Tarihi"
                          variant="standard"
                          fullWidth
                          type='date'
                          size='small'
                          value={data?.education[i]?.outDate}
                          onChange={(e) => {
                            data.education[i].outDate = moment(e.target.value).format('DD/MM/yyyy')
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                    </Grid>
                  </Box>
                )
              }

              <Button onClick={() => addEducation()} variant="outlined" size="small" fullWidth>DAHA FAZLA EKLE</Button>

            </AccordionDetails>
          </Accordion>

          {/* TECRÜBE - DENEYİM BİLGİLERİ */}
          <Accordion expanded={expanded === 'tecrube'} onChange={handleChange('tecrube')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="overline" >
                  TECRÜBE - DENEYİM BİLGİLERİ
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>

              {
                data?.experience.map((val, i) =>
                  <Box key={i} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Kurum Adı"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.corporationName}
                          onChange={(e) => {
                            data.experience[i].corporationName = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Meslek / Yapılan İş"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.job}
                          onChange={(e) => {
                            data.experience[i].job = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Açıklama"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.description}
                          onChange={(e) => {
                            data.experience[i].description = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Giriş Tarihi"
                          variant="standard"
                          fullWidth
                          type='date'
                          size='small'
                          value={val?.inDate}
                          onChange={(e) => {
                            data.experience[i].inDate = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Çıkış Tarihi"
                          variant="standard"
                          fullWidth
                          type='date'
                          size='small'
                          value={val?.outDate}
                          onChange={(e) => {
                            data.experience[i].outDate = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                )
              }

              <Button onClick={() => addExperience()} variant="outlined" size="small" fullWidth>DAHA FAZLA EKLE</Button>

            </AccordionDetails>
          </Accordion>

          {/* DİL BİLGİLERİ */}
          <Accordion expanded={expanded === 'dil'} onChange={handleChange('dil')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="overline" >
                  DİL BİLGİLERİ
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>

              {
                data?.languages.map((val, i) =>
                  <Box key={i} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Dil"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.title}
                          onChange={(e) => {
                            data.languages[i].title = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Seviye"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.level}
                          onChange={(e) => {
                            data.languages[i].level = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Sertifika"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.certifica}
                          onChange={(e) => {
                            data.languages[i].certifica = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                )
              }

              <Button onClick={() => addExperience()} variant="outlined" size="small" fullWidth>DAHA FAZLA EKLE</Button>

            </AccordionDetails>
          </Accordion>

          {/* REFERANS BİLGİLERİ */}
          <Accordion expanded={expanded === 'referans'} onChange={handleChange('referans')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="overline" >
                  REFERANS BİLGİLERİ
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>

              {
                data?.referances.map((val, i) =>
                  <Box key={i} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Adı Soyadı"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.fullName}
                          onChange={(e) => {
                            data.referances[i].fullName = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Meslek / Yapılan İş"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.job}
                          onChange={(e) => {
                            data.referances[i].job = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          label="Kurumu"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.corporateName}
                          onChange={(e) => {
                            data.referances[i].corporateName = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Telefon"
                          variant="standard"
                          fullWidth
                          type='text'
                          size='small'
                          value={val?.phone}
                          onChange={(e) => {
                            data.referances[i].phone = e.target.value
                            setData({ ...data })
                          }}
                        />
                      </Grid>

                    </Grid>
                  </Box>
                )
              }

              <Button onClick={() => addExperience()} variant="outlined" size="small" fullWidth>DAHA FAZLA EKLE</Button>

            </AccordionDetails>
          </Accordion>

          {/* SOSYAL MEDYA - PLATFORM BİLGİLERİ */}
          <Accordion expanded={expanded === 'sosyalMedya'} onChange={handleChange('sosyalMedya')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="overline" >
                  SOSYAL MEDYA / PLATFORM BİLGİLERİ
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Facebook Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">facebook.com/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.facebook}
                      onChange={(e) => {
                        data.socialMedia.facebook = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Instagram Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">instagram.com/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.instagram}
                      onChange={(e) => {
                        data.socialMedia.instagram = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Twitter Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">twitter.com/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.twitter}
                      onChange={(e) => {
                        data.socialMedia.twitter = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="LinkedIn Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">linkedin.com/in/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.linkedin}
                      onChange={(e) => {
                        data.socialMedia.linkedin = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="GitHub Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">github.com/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.github}
                      onChange={(e) => {
                        data.socialMedia.github = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Behance Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">behance.net/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.behance}
                      onChange={(e) => {
                        data.socialMedia.behance = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Dribbble Kullanıcı Adınız"
                      variant="standard"
                      fullWidth
                      type='text'
                      size='small'
                      InputProps={{
                        startAdornment: <InputAdornment position="start">dribbble.com/</InputAdornment>,
                      }}
                      value={data?.socialMedia?.dribbble}
                      onChange={(e) => {
                        data.socialMedia.dribbble = e.target.value
                        setData({ ...data })
                      }}
                    />
                  </Grid>

                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
      {/* Right Content */}
      <Grid item xs={12} sm={6} md={6}>
        <PDFViewer style={{ width: '100%', minHeight: '100vh' }}>
          <Sablon1 data={data} />
        </PDFViewer>
      </Grid>
    </Grid >
  )
};

export default App;
