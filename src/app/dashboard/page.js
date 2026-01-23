'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';


export default function DashboardPage() {
  const router = useRouter();

  const About = [
    { name: 'Tech Stack', image: '/images/techstack.png', path: '/dashboard/about/techstack/' },
    { name: 'Education', image: '/images/Education.png', path: '/dashboard/about/education/' },
    { name: 'Experience', image: '/images/Experience.png', path: '/dashboard/about/experience/' },
    { name: 'Interests', image: '/images/Interests.png', path: '/dashboard/about/interests/' },
  ];

  const Projects = [
    { name: 'Featured', image: '/images/Featured.png', path: '/dashboard/projects/featured/' },
    { name: 'Personal', image: '/images/Curiosity.png', path: '/dashboard/projects/personal/' },
    { name: 'AI', image: '/images/AI.png', path: '/dashboard/projects/ai/' },
    { name: 'Small', image: '/images/Small.png', path: '/dashboard/projects/small/' },
  ];

  const Certificates = [
    { name: 'Programming Languages', image: '/images/Language.png', path: '/dashboard/certificates/programmingLanguages/' },
    { name: 'Web Development', image: 'images/web.png', path: '/dashboard/certificates/webDevelopment/' },
    { name: 'Networking', image: 'images/networking.png', path: '/dashboard/certificates/networking/' },
    { name: 'AI', image: 'images/artificialIntelligence.png', path: '/dashboard/certificates/artificialIntelligence/' },
  ];

  const [items, setItems] = React.useState(About);

  return (
    <>
      <CssBaseline />

{/* DESKTOP SOCIAL ICONS */}
<Box
  sx={{
    display: { xs: 'none', md: 'flex' },
    position: 'fixed',
    top: 48,
    right: 24,
    zIndex: 9999,
    gap: 1,
    padding: '6px',
    borderRadius: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    border: '1px solid #334155',
    backdropFilter: 'blur(6px)',
  }}
>
  <IconButton
    component="a"
    href="https://github.com/DoncinDonut"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'white' }}
  >
    <GitHubIcon />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.linkedin.com/in/cian-donnelly-/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'white' }}
  >
    <LinkedInIcon />
  </IconButton>

  <IconButton
    component="a"
    href="mailto:ciandonnelly15@outlook.com"
    sx={{ color: 'white' }}
  >
    <EmailIcon />
  </IconButton>

  <IconButton
    component="a"
    href="/Cian_Donnelly_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'white' }}
  >
    <DescriptionIcon />
  </IconButton>

</Box>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(1200px circle at top, #0F172A 0%, #020617 60%)',
          py: 6
        }}
      >
        {/* INTRO */}
        <Container maxWidth="md" sx={{ mb: 6 }}>
          <Typography variant="h3" fontWeight={700} color="#E5E7EB" mb={2}>
            Cian Donnelly
          </Typography>

          <Typography color="#9CA3AF">
            I am currently a 3rd year student studying Informatics and Computing at
            Technological University Dublin.
          </Typography>
        </Container>

        {/* BUTTONS */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{   mt: { xs: 2, md: 20 }, mb: 6, px: { xs: 2, sm: 4 } }}>
          <Button variant="contained" onClick={() => setItems(About)} sx={{ px: { xs: 4, md: 14 } }}>
            About
          </Button>
          <Button variant="contained" onClick={() => setItems(Projects)} sx={{ px: { xs: 4, md: 14 } }}>
            Projects
          </Button>
          <Button variant="contained" onClick={() => setItems(Certificates)} sx={{ px: { xs: 4, md: 14 } }}>
            Certificates
          </Button>
        </Stack>

        <Container maxWidth="md">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 4,
            }}
          >
            {items.map((item, index) => (
              <Paper
                key={index}
                onClick={() => router.push(item.path)}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: '#0F172A',
                  border: '1px solid #1F2937',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: 120,
                    objectFit: 'contain',
                    marginBottom: 1,
                  }}
                />

                <Typography color="#E5E7EB" fontWeight={600}>
                  {item.name}
                </Typography>
              </Paper>
            ))}

            {/* MOBILE SOCIAL FOOTER */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                justifyContent: 'center',
                gap: 3,
                py: 1.5,
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderTop: '1px solid #1F2937',
                zIndex: 9999,
              }}
            >
              <IconButton
                component="a"
                href="https://github.com/DoncinDonut"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/cian-donnelly-/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:ciandonnelly15@outlook.com"
                sx={{ color: 'white' }}
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                component="a"
                href="/Cian_Donnelly_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <DescriptionIcon />
              </IconButton>

            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
}
