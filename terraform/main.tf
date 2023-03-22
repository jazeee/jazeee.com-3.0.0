terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_s3_bucket" "test2-jazeee-com" {
  bucket = "test2.jazeee.com"
  acl    = "public-read"
  policy = file("policy.json")

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

locals {
  content_types = {
    css  = "text/css"
    html = "text/html"
    js   = "application/javascript"
    json = "application/json"
    txt  = "text/plain"
    jpg  = "image/jpg"
    png  = "image/png"
  }
}

resource "aws_s3_object" "test2-jazeee-com" {
  for_each = fileset("../build/", "**")
  bucket = "test2.jazeee.com"
  content_type = lookup(local.content_types, element(split(".", each.value), length(split(".", each.value)) - 1), "text/plain")
  key = each.value
  source = "../build/${each.value}"
  etag = filemd5("../build/${each.value}")
}
