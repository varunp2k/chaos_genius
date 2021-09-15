"""add the config table

Revision ID: 7e2723132df3
Revises: 7be54a3936d5
Create Date: 2021-09-03 09:37:30.936106

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7e2723132df3'
down_revision = '7be54a3936d5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('config_setting',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('config_setting', sa.JSON(), nullable=True),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('config_setting')
    # ### end Alembic commands ###
