from pydantic import BaseModel
from typing import Optional

# Project Schemas
class ProjectBase(BaseModel):
    title: str
    tag: str
    description: str
    stack: str
    stack_icons: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    featured: bool = False
    image_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True

# Contact Schemas
class ContactBase(BaseModel):
    name: str
    email: str
    message: str

class ContactCreate(ContactBase):
    pass

class ContactResponse(ContactBase):
    id: int

    class Config:
        from_attributes = True

# Certification Schemas
class CertificationBase(BaseModel):
    title: str
    issuer: str
    date_earned: Optional[str] = None
    image_url: Optional[str] = None
    credential_url: Optional[str] = None

class CertificationCreate(CertificationBase):
    pass

class CertificationResponse(CertificationBase):
    id: int

    class Config:
        from_attributes = True

# Profile Schemas
class ProfileBase(BaseModel):
    name: str
    photo_url: str
    bio: Optional[str] = None

class ProfileCreate(ProfileBase):
    pass

class ProfileResponse(ProfileBase):
    id: int

    class Config:
        from_attributes = True