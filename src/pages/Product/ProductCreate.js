import { Box, Button, Container, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import { ProductCreateForm } from '../../components/Product'
import DotsVertical from '../../icons/DotsVertical'
import SaveIcon from '../../icons/Save'

const ProductCreate = () => {
	return (
		<>
			<Helmet>
				<title>Blog: Post Create | Material Kit Pro</title>
			</Helmet>
			<Box
				sx={{
					backgroundColor: 'background.paper',
					minHeight: '100%'
				}}
			>
				<div>
					<Container maxWidth="lg">
						<Toolbar disableGutters sx={{ py: 2 }}>
							<Grid alignItems="center" container justifyContent="space-between" spacing={3}>
								<Grid item>
									<Typography color="textPrimary" variant="body2">
										Hello, Jane Rotanson
									</Typography>
								</Grid>
								<Grid item>
									<Button color="primary" component={RouterLink} size="large" to="/blog" variant="outlined">
										Cancel
									</Button>
									<Button
										color="primary"
										component={RouterLink}
										size="large"
										startIcon={<SaveIcon />}
										sx={{ mx: 2 }}
										to="/blog/1"
										variant="contained"
									>
										Publish Changes
									</Button>
									<IconButton edge="end">
										<DotsVertical fontSize="small" />
									</IconButton>
								</Grid>
							</Grid>
						</Toolbar>
					</Container>
				</div>
				<Divider />
				<Box sx={{ py: 6 }}>
					<Container maxWidth="lg">
						<ProductCreateForm />
					</Container>
				</Box>
			</Box>
		</>
	)
}

export default ProductCreate
