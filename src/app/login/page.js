'use client';

import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';

import Link from '@mui/material/Link';

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';

export default function loginPage() {

    const handleSubmit = (event) => {
    console.log("Handling Submit");
    event.preventDefault();


    const data = new FormData(event.currentTarget);

    let code = data.get("code")

    console.log("Sent Code: " + code)

    //Empty Field Text
     if (!code) {
        alert("Please fill in all fields");
        return;
    }

    console.log("CODE SENT:", JSON.stringify(code));


    runDBCallAsync(`/api/login?code=${encodeURIComponent(code.trim())}`);

};

    async function runDBCallAsync(url) {
        const res = await fetch(url);
        const data = await res.json();

        if (data.valid) {
            console.log("Permission Granted, Now Entering the Matrix");
            window.location.href = "/dashboard";
        }

        else {
            console.log("Permission DENIED");
            alert("Invalid code");
        }
    }

    //*****************************************************************************************************************
    //Line 10:
        //When an occurence happens in the browser (event), the browser looks for something that is
            //Designed to handle it then calls the function

    //Line 14:
        //Create an object to use the in built tool (FormData) so that when the event currentTarget (current form)
              //Is submitted the email and password are retrieved (FormData) and printed to the console once submitted
    //*****************************************************************************************************************

                        return (

                            <Box sx = {{
                                    backgroundImage: "url('/images/Background_Img.png')",
                                    minHeight: '100vh',
                                              py: 6,
                                    opacity: 0.8
                                }}
                            >

                            <Container maxWidth = "sm">

                                {/* Centers everything on the screen */}
                                <Box sx = {{
                                        height: '100vh',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >

                                {/* Form submit handler */}
                                <Box component = "form" onSubmit = {handleSubmit} noValidate sx = {{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: 400,
                                        borderRadius: 2,
                                        overflow: 'auto',
                                        padding: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                >

                                {/* Background of/and form inputs */}
                                <Box sx = {{ position: 'relative' }}>

                                    {/* Form Background */}
                                        <Box sx = {{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundColor: '#212121',
                                            opacity: 0.4,
                                            zIndex: 0,
                                            borderRadius: 2
                                        }}
                                    />

                                    {/* Header for form */}
                                    <h1 style = {{
                                        padding: 20,
                                        textAlign: 'center'
                                    }}>
                                        Enter Code
                                    </h1>

                                    {/* Spacing for background of form */}
                                    <Box sx = {{
                                            position: 'relative',
                                            zIndex: 1,
                                            padding: 4
                                        }}
                                    >

                                    {/* Text field positioning */}
                                    <Box sx = {{
                                            width: '100%',
                                            textAlign: 'center',
                                        }}
                                    >

                                        {/* Code input field */}
                                        <TextField sx = {{ backgroundColor: '#ffff' }}
                                            required
                                            id = "code"
                                            name = "code"
                                            autoFocus
                                        />
                                    </Box>

                                    {/* Login button positioning */}
                                    <Box sx = {{
                                            width: '100%',
                                            textAlign: 'center'
                                        }}
                                    >

                                        {/* Login button positioning */}
                                        <Button type = "submit" fullWidth variant = "contained" sx = {{
                                                marginTop: 5,
                                                backgroundColor:'#18A558',
                                                width: 210,
                                                fontSize: '18px',
                                                borderRadius: 2
                                            }}
                                        >
                                            LOGIN
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }