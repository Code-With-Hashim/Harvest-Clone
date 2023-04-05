import { AvatarGroup, Avatar } from '@chakra-ui/react'

export default function UserAvatar({props}) {
    const userDetail = props


    return (
        <AvatarGroup>
        <Avatar size='sm' bg='teal.500' src={userDetail && userDetail.avatar} />
    </AvatarGroup>  
    )
}